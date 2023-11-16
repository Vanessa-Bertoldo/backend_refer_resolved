const { Router }        =   require("express")
const ControlController =   require("../controller/controlController")

const router = Router()

router
    .get('/controls', ControlController.searchData)
    .post('/controls', ControlController.insertDataControl)
    .put('/controls/id/:id')

    module.exports = router