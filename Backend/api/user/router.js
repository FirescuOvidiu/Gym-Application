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
  "/",
  checkUserAuth,
  isUserValid,
  checkBody,
  userController.updateUser
);

module.exports = router;
