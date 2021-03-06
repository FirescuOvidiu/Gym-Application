const mongoose = require("mongoose");

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
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

workoutSchema.index({ date: 1 }, { expireAfterSeconds: 24 * 60 * 60 });

module.exports = mongoose.model("Workout", workoutSchema);
