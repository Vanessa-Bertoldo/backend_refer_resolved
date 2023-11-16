const { Router }        =   require("express")

const FichasController = require("../controller/fichasController")
const router = Router()

router
    .get('/fichas', FichasController.getDataTableFichas)
    .get('/fichas/matricula/:matricula', FichasController.getDataByMat)
    .post('/fichas', FichasController.insertDataInTableFicha)
    .put('/fichas/id/:id', FichasController.updateData)
    .delete('/fichas/matricula/:matricula', FichasController.deleteDataInTableFichas)

    module.exports = router