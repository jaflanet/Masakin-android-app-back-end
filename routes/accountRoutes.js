const router = require("express").Router();
const controller = require("../controllers/accountController");
const upload = require("../config/multerConfig");

router
  .route("/")
  .get(controller.getAllAccount)
  .post(upload.single("image"), controller.addAccount);

router
  .route("/:accountId")
  .delete(controller.deleteAccount)
  .put(upload.single("image"), controller.updateAccount)
  .get(controller.getAccountById);

module.exports = router;
