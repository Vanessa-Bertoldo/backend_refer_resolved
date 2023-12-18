const { Router } = require("express")
const FichaController = require("../controller/fichaController")

const router = Router()

router  
    .get('/ficha', FichaController.searchData)
    .get('/ficha/id/:id',FichaController.searchFichaById)
    .delete('/ficha/id/:id', FichaController.deleteFicha)
    .post('/ficha', FichaController.insertData)
    .post('/fichaSearch', FichaController.searchNameInFicha)


module.exports = router