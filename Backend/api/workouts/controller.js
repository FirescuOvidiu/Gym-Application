const Workout = require("./model");

// Method used to get workouts
const getWorkout = async (req, res, next) => {};

// Method used to create workouts
const createWorkout = async (req, res, next) => {
  try {
    let workout = new Workouts(req.body);
    workout = await workouts.save();
    res.status(200).json({ status: "The workout have been created." });
  } catch (error) {
    return next(error);
  }
};

// Method used to delete workouts
const deleteWorkout = async (req, res, next) => {};

module.exports = {
  getWorkout,
  createWorkout,
  deleteWorkout,
};
