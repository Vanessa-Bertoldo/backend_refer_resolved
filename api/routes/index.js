const bodyParser    = require('body-parser')

const usuario       = require("./usuarioRouter")


module.exports = app => {
  app.use(
    bodyParser.json(),
    usuario,
    
  )
}
