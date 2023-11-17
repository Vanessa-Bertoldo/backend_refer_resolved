const bodyParser    = require('body-parser')

const control       = require("./controlRouter")
const fichas        = require("./fichaRouter")
const usuario       = require("./usuarioRouter")
const ticket        = require("./ticketRoute")

module.exports = app => {
  app.use(
    bodyParser.json(),
    control,
    fichas,
    usuario,
    ticket
  )
}
