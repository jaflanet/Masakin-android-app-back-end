const router = require('express').Router()
const controller = require('../controllers/orderController')

router
    .route("/")
    .get(controller.getAllOrder)
    .post(controller.addOrder);

router
    .route("/:orderId")
    .get(controller.getOrderById);




module.exports = router; 