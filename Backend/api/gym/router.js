const gymController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");

const { valdiationResults } = require("../middleware/body-validation");

const router = require("express").Router();

router.get("/:id?", checkUserAuth, gymController.getGym);

router.post("/", checkUserAuth, valdiationResults, gymController.createGym);

router.put("/:_id", checkUserAuth, valdiationResults, gymController.updateGym);

router.delete("/:_id", checkUserAuth, gymController.deleteGym);

module.exports = router;
