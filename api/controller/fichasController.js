const FichasService = require("../services/fichasService")

const fichaService = new FichasService()

class FichasController{
    //get all data from table dbo_ficha
    static async getDataTableFichas(req, res){
        try{
            const fichas = await fichaService.getDataTableFicha()
            return res.status(200).json(fichas)
        } catch(err) {
            return res.status(400).send({message: err.message})
        }
    }
    /*
    static async getDataByName(req, res){
        const { nome } = req.body

        try{
            const ficha = await fichaService.getFilterDataByName(nome)
            return res.status(200).json(ficha)
        } catch(err){
            return res.status(401).send({message: err.message})
        }
    }
    */
    static async getDataByMat(req, res){
        const { matricula } = req.params

        try{
            const ficha = await fichaService.getFilterDataBymat(matricula)
            return res.status(200).json(ficha)
        } catch(err){
            return res.status(401).send({message: err.message})
        }
    }

    static async insertDataInTableFicha(req, res){
        const { matricula, nome, setor, classe, tamanho } = req.body
        try{
            const newFicha = await fichaService.insertDataTableFichas({matricula, nome, setor, classe, tamanho})
            return res.status(200).json(newFicha)
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }

    static async deleteDataInTableFichas(req, res){
        const { matricula } = req.params
        console.log("matricula", matricula)
        try{
            await fichaService.deleteDataFichasById(matricula)
            return res.status(200).send({ message: 'exclusão realizada com sucesso'})
        } catch(err) {
            return res.status(400).send({message: err.message})
        }
    }

    static async updateData(req, res){
        const { matricula } = req.params
        const { nome, setor, classe } = req.body

        try{
            const ficha = await fichaService.deleteDataFichasById({matricula, nome, setor, classe})
            return res.status(200).json(ficha)
        } catch(err){
            res.status(400).send({message: err.message})
        }
    }
}
module.exports = FichasController