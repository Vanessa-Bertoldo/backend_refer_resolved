const database = require("../models")
const { Op } = require("sequelize");

class NutritionService{
    
    async searchDataFilter(dto){
        try{
            const data = await database.TB_FICHA.findAll({
                include: [
                    {
                        model: database.TB_TICKET,
                        as: "tickets",
                        attributes: ['matricula', 'data', 'modo_pagamento', 'valor_pago', 'tamanho'],
                        where: {
                            data: {
                                [Op.between]: [dto.dataInicial, dto.dataFinal]
                            },
                            modo_pagamento: dto.modo_pagamento
                        }
                    },
                ],
                where: {
                    classe: dto.classe
                }
            })
            return data
        } catch(error) {
            throw new Error("Erro ao filtrar dados ", error)
        }
    }
}
module.exports = NutritionService