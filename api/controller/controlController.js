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
}

module.exports = ControlController

