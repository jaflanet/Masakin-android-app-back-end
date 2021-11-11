const router = require('express').Router()
const controller = require('../controllers/restaurantController')

// router for appetizer
// router.get('/', controller.getAllRestaurant);
// router.post('/', controller.addRestaurant);

router
    .route("/")
    .get(controller.getAllRestaurant)
    .post(controller.addRestaurant);

// router
//     .route("/:id")
//     .delete(controller.deleteRestaurant);


module.exports = router; 