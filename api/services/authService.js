const database = require("../models")
const { compare } = require('bcryptjs')

class AuthService{
    async login(dto){
        const user = await database.TB_USUARIO.findOne({
            attributes: ['id', 'usuario', 'senha'],
            where: {
                usuario: dto.user
            }
        })
        console.log("user ", user)

        if(!user){
            throw new Error('Usuario não cadastrado')
        }

        const equalPassw = dto.password === user.senha ? true : false

        if(!equalPassw){
            throw new Error('Usuario ou senha inválido')
        }

        return user
    }
}
module.exports = AuthService