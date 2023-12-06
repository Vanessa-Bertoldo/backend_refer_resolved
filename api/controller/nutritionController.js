const NutritionService = require("../services/nutritionService")

const nutritionService = new NutritionService()

class NutritionController{
    static async filterData(req, res){
        //const { dataInicial, dataFinal, classe, modo_pagamento } = req.body
        const { matricula } = req.body

        try{
            const data = await nutritionService.searchDataFilter(matricula)
            res.status(200).json(data)
        }catch(error){
            res.status(400).send({ message: error.message })
        }
    }
}
module.exports = NutritionController