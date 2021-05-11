const userController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");
const {
  validationResults,
  isUserValid,
} = require("../middleware/body-validation");

const router = require("express").Router();

router.get("/:_userId?", checkUserAuth, userController.getUser);

router.post(
  "/register",
  isUserValid,
  validationResults,
  userController.register
);

router.post("/login", userController.login);

router.put(
  "/:_userId?",
  checkUserAuth,
  isUserValid,
  validationResults,
  userController.updateUser
);

router.delete("/:_userId", checkAdminAuth, userController.deleteUser);

module.exports = router;
