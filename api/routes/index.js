const bodyParser    = require('body-parser')

const control       = require("./controlRouter")
const fichas        = require("./fichaRouter")

module.exports = app => {
  app.use(
    bodyParser.json(),
    control,
    fichas
  )
}
