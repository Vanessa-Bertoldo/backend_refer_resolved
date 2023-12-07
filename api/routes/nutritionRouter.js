const { Router } = require("express")
const NutritionController = require("../controller/nutritionController")

const router = Router()

router  
    .post('/nutrition', NutritionController.filterData)

module.exports = router