const bodyParser    = require('body-parser')

const usuario       = require("./usuarioRouter")
const ficha         = require("./fichaRouter")
const ticket        = require("./ticketRouter")
const auth          = require("./authRouter")
const nutrition     = require("./nutritionRouter")


module.exports = app => {
  app.use(
    bodyParser.json(),
    usuario,
    ficha,
    ticket,
    auth,
    nutrition
  )
}
