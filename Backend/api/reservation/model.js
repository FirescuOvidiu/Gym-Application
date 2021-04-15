const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    rquired: true,
    unique: true,
    ref: "User",
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  gymId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Gym",
  },
});

reservationSchema.index({ date: 1 }, { expireAfterSeconds: 60 * 60 });

module.exports = mongoose.model("Reservation", reservationSchema);
