const database = require("../models")

class UsuarioService{
    async searchAllData(){
        const usuarios = database.TB_USUARIO.findAll()
        return usuarios
    }

    async searchDataUserById(id){
        try{
            const usuario = database.TB_USUARIO.findOne({
                where:{
                    ID: id
                }
            })
            return usuario
        } catch(err) {
            throw new Error("Erro ao acessar a rota de busca por usuario")
        }
    }

    async insertUserinDatabase(dto){
        const usuario = await database.TB_USUARIO.findOne({
            where: {
                nome: dto.nome
            }
        })

        if (!usuario){
            throw new Error("usuario já registrado no banco")
        }

        try{
            const newUsuario = database.TB_USUARIO.create({
                nome:           dto.senha,
                senha:          dto.senha,
                setor:          dto.setor,
                classe:         dto.classe,
                alter_ficha:    dto.alter_ficha,
                delete_ficha:   dto.delete_ficha,
            })
            return newUsuario
        } catch(err) {
            throw new Error("Erro ao inserir dados no banco")
        } 
    }

    async deleteDataUser(id){
        try{
            database.TB_USUARIO.destroy({
                where: {
                    id: id
                }
            })
        } catch(err) {
            throw new Error("Erro ao excluir dados do usuario")
        }
    }

    async updateDataUser(dto){
        const usuario = await database.TB_USUARIO.findOne({
            where: {
                id: dto.id
            }
        })
       
        if(!usuario){
            throw new Error("Usuario não registrado no banco")
        }
        try{
            usuario.nome            = dto.senha,
            usuario.senha           = dto.senha,
            usuario.setor           = dto.setor,
            usuario.classe          = dto.classe,
            usuario.alter_ficha     = dto.alter_ficha,
            usuario.delete_ficha    = dto.delete_ficha

            await usuario.save()
            return await usuario.reload()
        } catch(err){
            throw new Error("Erro ao atualizar dados");
        }   
        
    }
}
module.exports = UsuarioService