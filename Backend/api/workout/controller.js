const Workout = require("./model");

const getWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.find({ user: req.params._userId });

    res.status(200).json({ workouts });
  } catch (error) {
    return next(error);
  }
};

const createWorkout = async (req, res, next) => {
  try {
    let workout = new Workout(req.body);
    workout = await workout.save();

    res.status(200).json({ status: "The workout was created.", workout });
  } catch (error) {
    return next(error);
  }
};

const deleteWorkout = async (req, res, next) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params._workoutId);

    if (!workout) {
      return next({ message: "The workout was not found." });
    }

    res.status(200).json({ status: "The workout was deleted." });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
};
