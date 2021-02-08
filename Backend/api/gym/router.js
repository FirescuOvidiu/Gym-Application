const gymController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");
const {
  isGymValid,
  valdiationResults,
} = require("../middleware/body-validation");

const router = require("express").Router();

router.get("/:id?", checkUserAuth, gymController.getGym);

router.post(
  "/",
  checkUserAuth,
  isGymValid,
  valdiationResults,
  gymController.createGym
);

router.put(
  "/:_id",
  checkUserAuth,
  isGymValid,
  valdiationResults,
  gymController.updateGym
);

router.delete("/:_id", checkUserAuth, gymController.deleteGym);

module.exports = router;
