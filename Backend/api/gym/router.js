const gymController = require("./controller");

const { checkUserAuth } = require("../middleware/auth-validation");
const {
  isGymValid,
  validationResults,
} = require("../middleware/body-validation");

const router = require("express").Router();

router.get("/:_gymId?", checkUserAuth, gymController.getGym);

router.post(
  "/",
  checkUserAuth,
  isGymValid,
  validationResults,
  gymController.createGym
);

router.put(
  "/:_gymId",
  checkUserAuth,
  isGymValid,
  validationResults,
  gymController.updateGym
);

router.delete("/:_gymId", checkUserAuth, gymController.deleteGym);

module.exports = router;
