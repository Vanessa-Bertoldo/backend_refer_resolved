const database = require("../models")
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { TB_TICKET } = database

class TicketService{
    async searchDataAll(){
        const tickets = database.TB_TICKET.findAll()
        return tickets
    }

    async searchDataById(id){
        try{
            const ticket = await database.TB_TICKET.findOne({
                where: {
                    id: id
                }
            })
            return ticket
        } catch(err){
            throw new Error("Erro ao pesquisar o id")
        }
    }

    async insertData(dto){
        try{
            const newTicket = database.TB_TICKET.create({
                matricula:              dto.matricula,
                data:                   dto.data,
                modo_pagamento:         dto.modo_pagamento,
                valor_pago:             dto.valor_pago,
                valor_total:            dto.valor_total,
                registro:               dto.registro,
                tamanho:                dto.tamanho
            })
            return newTicket
        } catch(err) {
            throw new Error("Erro ao inserir dados")
        }
    }

    async deleteData(id){
        try{
            await database.TB_TICKET.destroy({
                where: {
                    id: id
                }
            })

        } catch(err){
            throw new Error("Erro ao excluir dados")
        }
    }
    
    async getTotTicketDate(dto) {
        let whereCondition = {
            data: {
                [Op.between]: [dto.dataInicial, dto.dataFinal],
            },
        };
    
        if (dto.modo_pagamento !== "" && dto.modo_pagamento !== null && dto.modo_pagamento !== "TODOS") {
            whereCondition.modo_pagamento = dto.modo_pagamento;
        }
    
        let includeTbFicha;
        if (dto.classe !== null && dto.classe !== "" && dto.classe !== "TODOS") {
            includeTbFicha = [
                {
                    model: database.TB_FICHA,
                    as: "ficha",
                    attributes: ['classe'],
                    where: {
                        classe: dto.classe,
                    },
                },
            ];
        }
    
        try {
            const tickets = await database.TB_TICKET.findAll({
                attributes: [
                    [
                        TB_TICKET.sequelize.fn('DATE_FORMAT', TB_TICKET.sequelize.col('data'), '%Y-%m-%d'),
                        'dia',
                    ],
                    [
                        Sequelize.fn('SUM', Sequelize.literal('CASE WHEN TB_TICKET.tamanho = "P" THEN 1 ELSE 0 END')),
                        'quantidadeP',
                    ],
                    [
                        Sequelize.fn('SUM', Sequelize.literal('CASE WHEN TB_TICKET.tamanho = "G" THEN 1 ELSE 0 END')),
                        'quantidadeG',
                    ],
                    [TB_TICKET.sequelize.fn('count', TB_TICKET.sequelize.col('*')), 'quantidadeTickets'],
                    [
                        Sequelize.literal('ROUND(SUM(valor_total), 2)'),
                        'total',
                    ],
                ],
                where: whereCondition,
                group: [TB_TICKET.sequelize.fn('DATE_FORMAT', TB_TICKET.sequelize.col('data'), '%Y-%m-%d')],
                raw: true,
                include: includeTbFicha,
            });
    
            return tickets;
        } catch (error) {
            throw new Error(error);
        }
    }

}
module.exports = TicketService
