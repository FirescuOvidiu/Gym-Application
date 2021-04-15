const usersInGymController = require("./controller");

const { checkUserAuth } = require("../middleware/auth-validation");

const router = require("express").Router();

router.get("/:_gymId", checkUserAuth, usersInGymController.getUsersFromGym);

router.post("/", checkUserAuth, usersInGymController.createUserInGym);

router.delete(
  "/:_userInGymId",
  checkUserAuth,
  usersInGymController.deleteUserFromGym
);

module.exports = router;
