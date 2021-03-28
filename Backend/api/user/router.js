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

const router = require("express").Router();

router.get("/users/:_id?", checkUserAuth, userController.getUser);

router.post(
  "/register",
  isUserValid,
  validationResults,
  userController.register
);

router.post("/login", userController.login);

router.put(
  "/users/:_id?",
  checkUserAuth,
  isUserValid,
  validationResults,
  userController.updateUser
);

router.delete("/users/:_id", checkAdminAuth, userController.deleteUser);

router.get("/:_userId/workouts", checkUserAuth, userController.getWorkouts);

router.post(
  "/:_userId/workouts",
  checkUserAuth,
  isWorkoutValid,
  validationResults,
  userController.createWorkout
);

router.delete(
  "/:_userId/workouts/:_workoutId",
  checkUserAuth,
  userController.deleteWorkout
);

module.exports = router;
