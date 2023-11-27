const { Router } = require("express")

const router = Router()

const AuthController = require("../controller/authController")

router
    .get('/auth/login', AuthController.login)