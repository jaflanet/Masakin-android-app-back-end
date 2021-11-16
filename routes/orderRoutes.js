const router = require("express").Router();
const controller = require("../controllers/orderController");

router.route("/").get(controller.getAllOrder).post(controller.addOrder);

router.route("/:orderNumber").get(controller.getOrderByOrderNumber);

module.exports = router;
