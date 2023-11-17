const database = require("../models")

class UsuarioService{
    async searchAllData(){
        const usuarios = database.dbo_USUARIO.findAll()
        return usuarios
    }

    async searchDataUserById(id){
        try{
            const usuario = database.dbo_USUARIO.findOne({
                where:{
                    id: id
                }
            })
            return usuario
        } catch(err) {
            throw new Error("Erro ao acessar a rota de busca por usuario")
        }
    }

    async insertUserinDatabase(dto){
        /*const usuario = await database.dbo_USUARIO.findOne({
            where: {
                id: dto.id
            }
        })

        if (!usuario){
            throw new Error("usuario já registrado no banco")
        }*/

        try{
            const newUsuario = database.dbo_USUARIO.create({
                nome:           dto.senha,
                senha:          dto.senha,
                per_alterar:    dto.per_alterar,
                per_excluir:    dto.per_excluir,
                super_usuario:  dto.super_usuario
            })
            return newUsuario
        } catch(err) {
            throw new Error("Erro ao inserir dados no banco")
        } 
    }

    async deleteDataUser(id){
        try{
            database.dbo_USUARIO.destroy({
                where: {
                    id: id
                }
            })
        } catch(err) {
            throw new Error("Erro ao excluir dados do usuario")
        }
    }

    async updateDataUser(dto){
        const usuario = await database.dbo_USUARIO.findOne({
            where: {
                id: dto.id
            }
        })
       
        if(!usuario){
            throw new Error("Usuario não registrado no banco")
        }
        try{
            usuario.codigo          = dto.codigo
            usuario.nome            = dto.nome
            usuario.senha           = dto.senha
            usuario.per_alterar     = dto.per_alterar
            usuario.per_excluir     = dto.per_excluir
            usuario.super_usuario   = dto.super_usuario

            await usuario.save()
            return await usuario.reload()
        } catch(err){
            throw new Error("Erro ao atualizar dados");
        }   
        
    }
}
module.exports = UsuarioService