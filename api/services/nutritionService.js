const database = require("../models")
const { Op } = require("sequelize");

class NutritionService{
    
  async searchDataFilter(dto){
    try {
        let whereCondition = {
            data: {
                [Op.between]: [dto.dataInicial, dto.dataFinal]
            },
        };

        if (dto.modo_pagamento.toUpperCase() !== "TODOS") {
            whereCondition.modo_pagamento = dto.modo_pagamento;
        }

        let whereConditionFicha
        if(dto.classe.toUpperCase() !== "TODOS"){
          whereConditionFicha = {
            where: {
              classe: dto.classe
            }
        }
        
        }

        const data = await database.TB_TICKET.findAll({
            where: whereCondition,
            include: [
                {
                    model: database.TB_FICHA,
                    as: "ficha", 
                    attributes: ['id', 'nome', 'setor', 'classe', 'tamanho'],
                    whereConditionFicha
                },
            ],
        });

        return data;
    } catch(error) {
        throw new Error(error);
    }
}

}
module.exports = NutritionService