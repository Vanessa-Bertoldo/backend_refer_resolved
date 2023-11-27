const database = require("../models")

class AuthService{
    async login(dto){
        const user = await database.TB_USUARIO.findOne({
            attributes: ['id', 'usuario', 'senha'],
            where: {
                nome: dto.usuario
            }
        })

        if(!user){
            throw new Error('Usuario não cadastrado')
        }

        const equalPassw = await compare(dto.senha, user.senha)

        if(!equalPassw){
            throw new Error('Usuario ou senha inválido')
        }

        return user
    }
}
module.exports = AuthService