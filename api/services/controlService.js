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
                nome:       dto.nome,
                setor:      dto.setor,
                senha:      dto.senha,
                vrre:       dto.vrre,
                ulaces:     dto.ulaces,
            })
            return newControl
        } catch(err){
            throw new Error('Erro ao cadastrar control')
        }
    }

    async searchDataById(id){
        try{
            const control = database.dbo_CONTROL.findOne({
                where: {
                    id: id
                }
            })
            return control
        } catch(e){
            throw new Error("Erro ao buscar control")
        }
    }

    async deleteDataById(id){
        try{
            database.dbo_CONTROL.destroy({
                where: {
                    id : id
                }
            })
        } catch(err){
            throw new Error("Erro ao excluir dados")
        }
    }

    async updateDataById(dto){
        const control = database.dbo_CONTROL.findOne({
            where: {
                id: dto.id
            }
        })

        if(!control){
            throw new Error("Registro não encontrado")
        }
        
        try{
            control.nome    = dto.nome
            control.setor   = dto.setor
            control.senha   = dto.senha
            control.vrre    = dto.vrre
            control.ulaces  = dto.ulaces
            
            await control.save()
            return await control.reload()
        } catch(err){
            throw new Error("Erro ao atualizar dados")
        }
    }
}

module.exports = ControlService