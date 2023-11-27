const bodyParser    = require('body-parser')

const usuario       = require("./usuarioRouter")
const ficha         = require("./fichaRouter")
const ticket        = require("./ticketRouter")
const auth          = require("./authRouter")


module.exports = app => {
  app.use(
    bodyParser.json(),
    usuario,
    ficha,
    ticket,
    auth
    

    
  )
}
