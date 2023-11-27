const UsuarioService = require("../services/usuarioService")

const usuarioService = new UsuarioService()

class UsuarioController{

    static async searchData(req, res){
        try{
            const usuarios = await usuarioService.searchAllData()
            res.status(200).json(usuarios)
        } catch(err){
            res.status(400).send({message: err.message})
        }
        
    }

    static async searchDataUser(req, res){
        const { id } = req.params
        try{
            const usuario = await usuarioService.searchDataUserById(id)
            res.status(200).json(usuario)
        } catch(err) {
            res.status(400).send({message: err.message})
        }
    }

    static async insertDataUsuario(req, res){
        const { nome, user, senha, setor, classe,  alter_ficha, delete_ficha } = req.body

        try{
            const usuario = await usuarioService.insertUserinDatabase({ nome, user, senha, setor, classe,  alter_ficha, delete_ficha})
            res.status(200).json(usuario)
        } catch(err){
            res.status(400).send({message: err.message})
        }
    }

    static async deleteUser(req, res){
        const { id } = req.params
        try{
            await usuarioService.deleteDataUser(id)
            res.status(200).send({message: "Dados excluidos com sucesso"})
        } catch(err) {
            res.status(400).send({message: err.message})
        }
    }

    static async updateDataUser(req, res){
        const { id } = req.params
        const { nome, codigo, user, senha, per_alterar, per_excluir, super_usuario} = req.body

        try{
            const usuario = await usuarioService.updateDataUser({id, codigo, user, nome, senha, per_alterar, per_excluir, super_usuario})
            res.status(200).json(usuario)
        } catch(err) {
            res.status(400).send({message: err.message})
        }
    }
}
module.exports = UsuarioController