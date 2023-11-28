const AuthService = require("../services/authService")
const authService = new AuthService()

class AuthController{
    static async login(req, res){
        const { user , password } = req.body
        console.log("requisição", req.body)
        try{
            const usuario = await authService.login({ user , password })
            return res.status(200).json({status: 200, message:"Sucesso", usuario: usuario})
        }catch(err){
            return res.status(400).json({status:400, message: err.message})
        }
    }
}
module.exports = AuthController