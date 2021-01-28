const bcrypt = require("bcryptjs");

const User = require("./model");

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
    return next(error.message);
  }
};

const login = async (req, res) => {
  res.status(200).send("Login Succesful");
};

module.exports = {
  register,
  login,
};
