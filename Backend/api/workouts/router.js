const workoutsController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");

const router = require("express").Router();

router.get("/:id?", checkUserAuth, workoutsController.getWorkouts);

router.post("/", checkUserAuth, workoutsController.createWorkouts);

router.delete("/:_id", checkUserAuth, workoutsController.deleteWorkouts);

module.exports = router;
