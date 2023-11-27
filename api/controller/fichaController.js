const FichaService = require("../services/fichaService")

const fichaService = new FichaService()

class FichaController{
    static async searchData(req, res){
        try{
            const fichas = await fichaService.searchAllData()
            return res.status(200).json(fichas)
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }

    static async insertData(req, res){
        const {matricula, nome, setor, classe, tamanho } = req.body
        try{
            const newFicha = await fichaService.insertData({matricula, nome, setor, classe, tamanho })
            return res.status(200).json(newFicha)
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }

    static async searchFichaById(req, res){
        const { id } = req.params
        try{
            const ficha = await fichaService.searchDataFilter(id)
            return res.status(200).json(ficha)
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }

    static async deleteFicha(req, res){
        const { id } = req.params
        try{
            await fichaService.deleteData(id)
            res.status(200).json({message: "Dados excluidos com sucesso"})
        }catch(err){
            res.status(400).send({message: err.message})
        }
    }
}

module.exports = FichaController