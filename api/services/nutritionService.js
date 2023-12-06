const database = require("../models")

class NutritionService{
    
    async searchDataFilter(matricula){
        try{
            /*const data = await database.TB_TICKET.findAll({
                include: [
                    {
                        model: database.TB_FICHA,
                        as: "fichas",
                        attributes: ['matricula', 'nome', 'setor', 'classe', 'tamanho'],
                        
                    },
                ],
                where: {
                    modo_pagamento: modo_pagamento
                }
            })*/
           
            const data = await database.TB_FICHA.findAll({
                include: [
                    {
                        model: database.TB_TICKET,
                        as: "tickets",
                        attributes: ['matricula', 'data', 'modo_pagamento', 'valor_pago', 'tamanho'],
                        
                    },
                ],
                where: {
                    matricula: matricula
                }
            })
            return data
        } catch(error) {
            throw new Error("Erro ao filtrar dados")
        }
    }
}
module.exports = NutritionService

/**include: [
                {
                    model: database.roles,
                    as: 'usuario_roles',
                    attributes: ['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                },
                {
                    model: database.permissoes,
                    as: 'usuario_permissoes',
                    attributes: ['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                }
            ],
            where: {
                id: dto.usuarioId
            } */