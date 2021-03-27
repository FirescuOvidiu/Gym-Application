const workoutController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");

const router = require("express").Router();

router.get("/", checkUserAuth, workoutController.getWorkout);

router.post("/", checkUserAuth, workoutController.createWorkout);

router.delete("/:_id", checkUserAuth, workoutController.deleteWorkout);

module.exports = router;
