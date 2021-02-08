const gymController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");

const router = require("express").Router();

router.get("/:id?", checkUserAuth, gymController.getGym);

router.post(
  "/create",
  checkAdminAuth,
  valdiationResults,
  gymController.createGym
);

router.put("/:_id", checkUserAuth, valdiationResults, gymController.updateGym);

router.delete("/:_id", checkAdminAuth, gymController.deleteGym);

module.exports = router;
