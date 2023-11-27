const database = require("../models")

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
}
module.exports = TicketService