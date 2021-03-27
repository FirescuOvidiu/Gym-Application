const userController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");
const {
  validationResults,
  isUserValid,
  isWorkoutValid,
} = require("../middleware/body-validation");
const { validationResult } = require("express-validator");

const router = require("express").Router();

router.get("/:id?", checkUserAuth, userController.getUser);

router.post(
  "/register",
  isUserValid,
  validationResults,
  userController.register
);

router.post("/login", userController.login);

router.put(
  "/update/:_id?",
  checkUserAuth,
  isUserValid,
  validationResults,
  userController.updateUser
);

router.delete("/:_id", checkAdminAuth, userController.deleteUser);

router.put(
  "/createWorkout",
  checkUserAuth,
  isWorkoutValid,
  validationResults,
  userController.createWorkout
);

router.put(
  "/deleteWorkout/:_workoutId",
  checkUserAuth,
  userController.deleteWorkout
);

module.exports = router;
