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
          default: 0,
        },
      },
    ],
  },
  notes: {
    type: String,
    default: "",
  },
});

workoutSchema.index({ date: 1 }, { expireAfterSeconds: 24 * 60 * 60 });

// Create a model for a workouts
module.exports = mongoose.model("Workout", workoutSchema);
