const { Router }        =   require("express")
const ControlController =   require("../controller/controlController")

const router = Router()

router
    .get('/controls', ControlController.searchData)
    .get('/controls/id/:id', ControlController.searchDataById)
    .post('/controls', ControlController.insertDataControl)
    .put('/controls/id/:id', ControlController.updateDataControl)
    .delete('/controls/id/:id', ControlController.deleteDataById)

module.exports = router