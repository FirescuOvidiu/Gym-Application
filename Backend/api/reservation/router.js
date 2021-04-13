const reservationController = require("./controller");

const {
  checkUserAuth,
  checkAdminAuth,
} = require("../middleware/auth-validation");

const router = require("express").Router();

router.get("/:_gymId", checkUserAuth, reservationController.getReservations);

router.post("/", checkUserAuth, reservationController.createReservation);

router.delete(
  "/:_reservationId",
  checkUserAuth,
  reservationController.deleteReservation
);

module.exports = router;
