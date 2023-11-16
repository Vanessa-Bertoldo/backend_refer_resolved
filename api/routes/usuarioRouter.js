const { Router }        =   require("express")
const UsuarioController = require("../controller/usuarioController")

const router = Router()

router  
    .get('/usuarios', UsuarioController.searchData)
    .get('/usuario/id/:id', UsuarioController.searchDataUser)
    .post('/usuario', UsuarioController.insertDataUsuario)

module.exports = router