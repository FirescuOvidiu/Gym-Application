const gymController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");
const {
  isGymValid,
  validationResults,
} = require("../middleware/body-validation");

const router = require("express").Router();

router.get("/:id?", checkUserAuth, gymController.getGym);

router.post(
  "/",
  checkUserAuth,
  isGymValid,
  validationResults,
  gymController.createGym
);

router.put(
  "/:_id",
  checkUserAuth,
  isGymValid,
  validationResults,
  gymController.updateGym
);

router.delete("/:_id", checkUserAuth, gymController.deleteGym);

router.post("/:_gymId/user", checkUserAuth, gymController.addUserInGym);

router.delete(
  "/:_gymId/user/:_userId",
  checkUserAuth,
  gymController.deleteUserFromGym
);

module.exports = router;
