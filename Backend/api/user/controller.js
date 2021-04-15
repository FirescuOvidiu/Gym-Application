const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./model");

const getUser = async (req, res, next) => {
  req.params._userId = req.params._userId || req.user.payload._id;

  try {
    const user = await User.findById(req.params._userId);

    if (!user) {
      return next({ message: "The user hasn't been found." });
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

    // Create the access token
    const accessToken = jwt.sign({ payload }, process.env.ACCESS_TOKEN_SECRET, {
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
  req.params._userId = req.params._userId || req.user.payload._id;

  try {
    let user = await User.findById(req.params._userId);

    if (!user) {
      return next({ message: "The user hasn't been found." });
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
    user.date = req.body.date || user.date;

    user = await user.save();

    res.status(200).json({ status: "The user has been updated." });
  } catch (error) {
    return next(error);
  }
};

// Method used to delete a user
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params._userId);

    if (!user) {
      return next({ message: "The user hasn't been found." });
    }

    res.status(200).json({ status: "The user has been deleted." });
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
};
