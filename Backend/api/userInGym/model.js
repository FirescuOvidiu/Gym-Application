const mongoose = require("mongoose");

const usersInGymSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "User",
  },
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Gym",
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

usersInGymSchema.index({ date: 1 }, { expireAfterSeconds: 2 * 60 * 60 });

module.exports = mongoose.model("UsersInGym", usersInGymSchema);
