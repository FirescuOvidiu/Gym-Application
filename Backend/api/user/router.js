const userController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");
const { isUserValid, checkBody } = require("../middleware/body-validation");

const router = require("express").Router();

router.get("/", checkUserAuth, userController.getUser);
router.post("/register", isUserValid, checkBody, userController.register);
router.post("/login", userController.login);
router.put(
  "/:_id",
  checkUserAuth,
  isUserValid,
  checkBody,
  userController.updateUser
);
router.delete("/:_id", checkAdminAuth, userController.deleteUser);

module.exports = router;
