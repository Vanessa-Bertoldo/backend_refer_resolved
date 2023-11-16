const { Router }        =   require("express")
const ControlController =   require("../controller/controlController")

const router = Router()

router
    .get('/controls', ControlController.searchData)

    module.exports = router