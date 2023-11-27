const { Router } = require("express")

const router = Router()

const AuthController = require("../controller/authController")

router
    .post('/auth/login', AuthController.login)

module.exports = router