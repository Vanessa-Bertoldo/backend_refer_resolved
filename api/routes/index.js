const bodyParser    = require('body-parser')

const control       = require("./controlRouter")

module.exports = app => {
  app.use(
    bodyParser.json(),
    control
  )
}