const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./model");

// Method used to get user informations
const getUser = async (req, res, next) => {
  try {
    // Find current user by id
    var user = await User.findById(req.user._id);
    user["password"] = undefined;
    user["__v"] = undefined;

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
    let payload = user;

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

// Method used to update a user
const updateUser = async (req, res, next) => {
  try {
    var user = await User.findById(req.user._id);

    if (!user) {
      return next({ message: "The user was not found." });
    }

    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password)
      user.password = crypt.hashSync(req.body.password, 10) || user.password;
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;
    user.birthday = req.body.birthday || user.birthday;
    user.gender = req.body.gender || user.gender;
    user.name = req.body.name || user.name;

    user = await user.save();
    user["password"] = undefined;
    user["__v"] = undefined;

    res.status(200).json({ status: "The user was updated.", user: user });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getUser,
  register,
  login,
  updateUser,
};
