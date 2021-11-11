const router = require('express').Router()
const controller = require('../controllers/menuController')

router
    .route("/")
    .get(controller.getAllMenu)
    .post(controller.addMenu);

    router 
    .route("/:menuId")
    .put(controller.updateMenu)
    .delete(controller.deleteMenu);

router
    .route("/:restaurantId")
    .get(controller.getMenuByRestaurantId);

module.exports = router; 