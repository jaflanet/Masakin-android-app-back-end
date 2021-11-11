const router = require('express').Router()
const controller = require('../controllers/accountController')

router
    .route("/")
    .get(controller.getAllAccount)
    .post(controller.addAccount);

router
    .route("/:accountId")
    .delete(controller.deleteAccount)
    .put(controller.updateAccount)
    .get(controller.getAccountById);


module.exports = router; 