const database = require("../models")

class ControlService{
    async searchAllData(){
        console.log("database.dbo_control", database)
        const controls = await database.dbo_CONTROL.findAll()
        return controls
    }

    async insertData(dto){
        /*const control = await database.dbo_control.findOne({
            where: {
                nome: dto.nome
            }
        })

        if(control){
            throw new Error("Usuario já cadastrado")
        }*/

        try{
            //const date = new Date("02/05/2023 20:00:00")
            //console.log("database ", database.dbo_control)
            const newControl = await database.dbo_CONTROL.create({
                nome: dto.nome,
                setor: dto.setor,
                senha: dto.senha,
                vrre: dto.vrre,
                ulaces: dto.ulaces,
            })
            return newControl
        } catch(err){
            throw new Error('Erro ao cadastrar control')
        }
    }
}

module.exports = ControlService