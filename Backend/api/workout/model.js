const mongoose = require("mongoose");

// Create a schema (blueprint) for workouts
const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 8,
  },
  date: {
    type: Date,
    required: true,
    min: Date.now,
  },
  type: {
    type: String,
    required: true,
  },
  exercises: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        sets: {
          type: Number,
          required: true,
        },
        reps: {
          type: Number,
          required: true,
        },
        rest: {
          type: Number,
          required: true,
        },
        weight: {
          type: Number,
          default: "No specific weight.",
        },
      },
    ],
  },
  notes: {
    type: String,
    default: "There are no notes.",
  },
});

// Create a model for a workouts
module.exports = mongoose.model("Workout", workoutSchema);
