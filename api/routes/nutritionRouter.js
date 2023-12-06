const { Router } = require("express")
const NutritionController = require("../controller/nutritionController")

const router = Router()

router  
    .get('/nutrition', NutritionController.filterData)

module.exports = router