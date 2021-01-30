const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./model");

// Method used to get user informations
const getUser = async (req, res, next) => {
  try {
    // Find current user by id
    var user = await User.findById(req.user._id);
    user["password"] = undefined;

    res.status(200).json({ user: user });
  } catch (error) {
    return next(error);
  }
};

const register = async (req, res, next) => {
  // Hash user password
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  try {
    // Create a new user with the informations provided
    var user = new User(req.body);
    user.role = "user";
    // Insert new user into the database
    user = await user.save();
    user["password"] = undefined;
    // Respond with registration completed
    res
      .status(200)
      .json({ status: "The registration has been completed.", user: user });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    // Look for the user in the database by email
    const user = await User.findOne({ email: req.body.email });

    // Check if the user password from the database is identical with the password provided
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      return next({ message: "Email or password incorrect." });
    }

    //Use the payload to store information about the user
    let payload = {
      _id: user._id,
      email: user.email,
      username: user.username,
      phone: user.phone,
      address: user.address,
      birthday: user.birthday,
      gender: user.gender,
      name: user.name,
      date: user.date,
      role: user.role,
    };

    // Create the access token
    let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });
    // Send the access token to the client
    res.status(200).send({ accessToken: accessToken });
  } catch (error) {
    return next(error);
  }
};

// Method used to update a book based on a filter
const updateUser = async (req, res, next) => {};

module.exports = {
  getUser,
  register,
  login,
  updateUser,
};
