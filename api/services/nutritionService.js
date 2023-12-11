const database = require("../models")
const { Op } = require("sequelize");

class NutritionService{
    
    async searchDataFilter(dto){
        try{
            const data = await database.TB_TICKET.findAll({
                where: {
                  data: {
                    [Op.between]: [dto.dataInicial, dto.dataFinal]
                  },
                  //modo_pagamento: dto.modo_pagamento
                },
                include: [
                  {
                    model: database.TB_FICHA,
                    as: "ficha", 
                    attributes: ['id', 'nome', 'setor', 'classe', 'tamanho'],
                    where: {
                      classe: dto.classe
                    }
                  },
                ],
              });
            return data
        } catch(error) {
            throw new Error(error)
        }
    }
}
module.exports = NutritionService