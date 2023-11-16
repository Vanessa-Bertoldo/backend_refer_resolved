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
}

module.exports = ControlController

