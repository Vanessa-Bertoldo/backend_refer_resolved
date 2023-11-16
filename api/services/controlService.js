const database = require("../models")

class controlService{
    async searchAllData(){
        const controls = await database.dbo_CONTROL.findAll()
        return controls
    }
}

module.exports = controlService