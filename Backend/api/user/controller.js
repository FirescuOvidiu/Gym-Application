const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./model");
const Workout = require("../workout/model");

// Method used to get user informations
const getUser = async (req, res, next) => {
  req.params._id = req.params._id || req.user.payload._id;

  try {
    let user = await User.findById(req.params._id);

    if (!user) {
      return next({ message: "The user was not found." });
    }

    if (req.user.payload.role === "user" && user._id != req.user.payload._id) {
      return next({ message: "A user can't search for another user." });
    }

    res.status(200).json({ user });
  } catch (error) {
    return next(error);
  }
};

const register = async (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  try {
    let user = new User(req.body);
    user.role = "user";
    user = await user.save();

    res.status(200).json({ status: "The registration has been completed." });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      return next({ message: "Email or password incorrect." });
    }

    //Use the payload to store information about the user
    let payload = user;
    payload["password"] = undefined;
    payload["__v"] = undefined;

    // Create the access token
    let accessToken = jwt.sign({ payload }, process.env.ACCESS_TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });

    res.status(200).send({ accessToken });
  } catch (error) {
    return next(error);
  }
};

// Method used to update a user
const updateUser = async (req, res, next) => {
  req.params._id = req.params._id || req.user.payload._id;

  try {
    let user = await User.findById(req.params._id);

    if (!user) {
      return next({ message: "The user was not found." });
    }

    if (req.user.payload.role === "user" && user._id != req.user.payload._id) {
      return next({ message: "A user can't update another user." });
    }

    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password)
      user.password = bcrypt.hashSync(req.body.password, 10) || user.password;
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;
    user.birthday = req.body.birthday || user.birthday;
    user.gender = req.body.gender || user.gender;
    user.name = req.body.name || user.name;
    if (req.user.role === "admin") {
      user.role = req.body.role || user.role;
    }

    user = await user.save();

    res.status(200).json({ status: "The user was updated." });
  } catch (error) {
    return next(error);
  }
};

// Method used to delete a user
const deleteUser = async (req, res, next) => {
  try {
    let user = await User.findByIdAndDelete(req.params._id);

    if (!user) {
      return next({ message: "The user was not found." });
    }

    res.status(200).json({ status: "The user was deleted." });
  } catch (error) {
    return next(error);
  }
};

// Method used to get all workouts
const getWorkouts = async (req, res, next) => {
  try {
    let user = await User.findById(req.params._userId).populate("workouts");

    if (!user) {
      return next({ message: "The user was not found." });
    }

    res.status(200).json({ workouts: user.workouts });
  } catch (error) {
    return next(error);
  }
};

// Method used to create a workout
const createWorkout = async (req, res, next) => {
  try {
    let user = await User.findById(req.params._userId);
    let workout = new Workout(req.body);

    if (!user) {
      return next({ message: "The user was not found." });
    }

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await workout.save({ session: sess });
    user.workouts.push(workout);
    await user.save({ session: sess });
    await sess.commitTransaction();

    res.status(200).json({ status: "The workout was created.", workout });
  } catch (error) {
    return next(error);
  }
};

// Method used to delete a workout
const deleteWorkout = async (req, res, next) => {
  try {
    let user = await User.findById(req.params._userId);

    if (!user) {
      return next({ message: "The user was not found." });
    }

    let workout = await Workout.findById(req.params._workoutId);

    if (!workout) {
      return next({ message: "The workout was not found." });
    }

    const sess = await mongoose.startSession();
    sess.startTransaction();
    user.workouts.pull(workout._id);
    await workout.remove({ session: sess });
    await user.save({ session: sess });
    await sess.commitTransaction();

    res.status(200).json({ status: "The workout was deleted." });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getUser,
  register,
  login,
  updateUser,
  deleteUser,
  getWorkouts,
  createWorkout,
  deleteWorkout,
};
