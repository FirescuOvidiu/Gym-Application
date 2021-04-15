const usersInGymController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");

const router = require("express").Router();

router.get("/:_gymId", checkUserAuth, usersInGymController.getUsersInGym);

router.post("/", checkUserAuth, usersInGymController.createUserInGym);

router.delete(
  "/:_userInGymId",
  checkUserAuth,
  usersInGymController.deleteUserFromGym
);

module.exports = router;
