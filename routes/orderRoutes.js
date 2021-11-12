const router = require('express').Router()
const controller = require('../controllers/orderController')

router
    .route("/")
    .get(controller.getAllOrder)
    .post(controller.addOrder);

router
    .route("/:orderNumber")
    .get(controller.getOrderByOrderNumber);

// router
//     .route(":/accountId/:restaurantId/:orderNumber")
//     .get(controller.getOrderByEachOrder);





module.exports = router; 