const userController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");
const {
  isUserValid,
  valdiationResults,
} = require("../middleware/body-validation");

const router = require("express").Router();

router.get("/:id?", checkUserAuth, userController.getUser);

router.post(
  "/register",
  isUserValid,
  valdiationResults,
  userController.register
);

router.post("/login", userController.login);

router.put(
  "/:_id?",
  checkUserAuth,
  isUserValid,
  valdiationResults,
  userController.updateUser
);

router.delete("/:_id", checkAdminAuth, userController.deleteUser);

router.put("/createWorkout", checkUserAuth, usersControllers.createWorkout);

router.put("/deleteWorkout", checkUserAuth, usersControllers.deleteWorkout);

module.exports = router;
