const router = require('express').Router()
const controller = require('../controllers/restaurantController')

router
    .route("/")
    .get(controller.getAllRestaurant)
    .post(controller.addRestaurant);

router
    .route("/:restaurantId")
    .delete(controller.deleteRestaurant)
    .put(controller.updateRestaurant);


module.exports = router; 