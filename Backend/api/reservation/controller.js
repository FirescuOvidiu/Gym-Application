const Reservation = require("./model");

const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find({ gymId: req.params._gymId });

    res.status(200).json({ reservations });
  } catch (error) {
    return next(error);
  }
};

const createReservation = async (req, res, next) => {
  try {
    let reservation = new Reservation(req.body);
    reservation = await reservation.save();

    res
      .status(200)
      .json({ status: "The reservation was created.", reservation });
  } catch (error) {
    return next(error);
  }
};

const deleteReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(
      req.params._reservationId
    );

    if (!reservation) {
      return next({ message: "The reservation was not found." });
    }

    res.status(200).json({ status: "The reservation was deleted." });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getReservations,
  createReservation,
  deleteReservation,
};
