const mongoose = require("mongoose");

// Create a schema (blueprint) for a user
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
    dropDups: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
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
  birthday: {
    type: Date,
    required: true,
    min: "1900-01-01",
  },
  gender: {
    type: String,
    required: true,
  },
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  date: { type: Date, default: Date.now },
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workouts" }],
  role: {
    type: String,
    required: true,
    default: "user",
  },
});

// Create a model for a user
module.exports = mongoose.model("User", userSchema);
