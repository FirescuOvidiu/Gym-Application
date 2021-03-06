const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  address: {
    type: String,
    required: true,
  },
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() },
  maxUsersInGym: { type: Number, required: true, default: 5 },
});

module.exports = mongoose.model("Gym", gymSchema);
