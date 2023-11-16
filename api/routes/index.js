const bodyParser    = require('body-parser')

const control       = require("./controlRouter")
const fichas        = require("./fichaRouter")
const usuarios      = require("./usuarioRouter")

module.exports = app => {
  app.use(
    bodyParser.json(),
    control,
    fichas,
    usuarios
  )
}
