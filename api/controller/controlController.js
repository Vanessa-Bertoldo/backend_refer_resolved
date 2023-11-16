const ControlService = require("../services/controlService")

const controlService = new ControlService()

class ControlController{
    static async searchData(req, res){
        try{
            const controls = await controlService.searchAllData()
            return res.status(200).json(controls)
        } catch(err){
            return res.status(400).send({message: err.message})
        }

    }

    static async insertDataControl(req, res){
        const {nome, setor, senha, vrre, ulaces } = req.body
        try{
            const control = await controlService.insertData({nome, setor, senha, vrre, ulaces})
            return res.status(200).json(control)
        } catch(err){
            return res.status(400).send({message: err.message})
        }
    }

    static async searchDataById(req, res){
        const { id } = req.params
        try{
            const control = await controlService.searchDataById(id)
            res.status(200).json(control)
        } catch(err){
            res.status(400).send({message: err.message})
        }
    }

    static async deleteDataById(req, res){
        const { id } = req.params

        try{
            await controlService.deleteDataById(id)
            res.status(200).send({message: "dados excluidos com sucesso"})
        } catch (err) {
            res.status(400).send({message: err.message})
        }
    }

    static async updateDataControl(req, res){
        const { id } = req.params
        const { nome, setor, senha, vrre, ulaces } = req.body
        try{
            const control = await controlService.updateDataById({id, nome, setor, senha, vrre, ulaces})
            res.status(200).json(control)
        } catch(err){
            res.status(400).send({message: err.message})
        }
    }
}

module.exports = ControlController

