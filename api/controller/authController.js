const AuthService = require("../services/authService")
const authService = new AuthService()

class AuthController{
    static async login(req, res){
        const { usuario , senha } = req.body
        try{
            const user = await authService.login({usuario, senha})
            return res.status(200).json({status: 200, message:"Sucesso"})
        }catch(err){
            res.status(400).send({status:400, message: err.message})
        }
    }
}
module.exports = AuthController