const mongoose = require("mongoose");

// Create a schema (blueprint) for workouts
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
});

reservationSchema.index({ date: 1 }, { expireAfterSeconds: 60 * 60 });

// Create a model for a workouts
module.exports = mongoose.model("Reservation", reservationSchema);
