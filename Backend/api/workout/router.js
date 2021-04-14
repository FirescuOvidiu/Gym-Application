const workoutController = require("./controller");

const { checkUserAuth } = require("../middleware/auth-validation");
const {
  validationResults,
  isWorkoutValid,
} = require("../middleware/body-validation");

const router = require("express").Router();

router.get("/:_userId", checkUserAuth, workoutController.getWorkouts);

router.post(
  "/",
  checkUserAuth,
  isWorkoutValid,
  validationResults,
  workoutController.createWorkout
);

router.delete("/:_workoutId", checkUserAuth, workoutController.deleteWorkout);

module.exports = router;
