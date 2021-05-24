const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");

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
  const confirmationCode = jwt.sign({}, process.env.ACCESS_TOKEN_SECRET);
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  try {
    let user = new User(req.body);

    user.confirmationCode = confirmationCode;
    user = await user.save();

    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    await transport.sendMail({
      from: "ovidiuoviovi174@gmail.com",
      to: user.email,
      subject: "Please confirm your account for Gym Application",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${user.name.first} ${user.name.last}</h2>
          <p>Please confirm your email by clicking on the following link</p>
          <a href=http://192.168.100.2:3000/api/user/confirm/${confirmationCode}> Click here</a>
          </div>`,
    });

    res.status(200).json({
      status:
        "The registration has been completed. Please check your email for confirmation.",
    });
  } catch (error) {
    return next(error);
  }
};

const verifyUser = async (req, res, next) => {
  try {
    let user = await User.findOne({
      confirmationCode: req.params._confirmationCode,
    });

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    user.status = "Active";
    user = await user.save();

    res.status(200).json({
      status: "The registration has been completed.",
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next({ message: "Email or password incorrect." });
    }

    if (user.status != "Active") {
      return next({ message: "Please verify your email!" });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return next({ message: "Email or password incorrect." });
    }

    //Use the payload to store information about the user
    let payload = user;
    payload["password"] = undefined;

    const accessToken = jwt.sign({ payload }, process.env.ACCESS_TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });

    res.status(200).send({ accessToken });
  } catch (error) {
    return next(error);
  }
};

const googlelogin = async (req, res, next) => {
  const token = req.body.token,
    clientId = req.body.clientId,
    client = new OAuth2Client(clientId);

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,
    });
    const userPayload = ticket.getPayload();
    let user = await User.findOne({ email: userPayload.email });

    if (!user) {
      user = new User({
        email: userPayload.email,
        username: userPayload.email.slice(0, userPayload.email.search("@")),
        password: uuidv4(),
        name: {
          first: userPayload.given_name,
          last: userPayload.family_name,
        },
      });
      user = await user.save();
      user = await User.findOne({ email: req.body.email });
    }

    //Use the payload to store information about the user
    let payload = user;
    payload["password"] = undefined;
    payload["__v"] = undefined;

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

const sendEmail = async (req, res, next) => {
  const email = req.body.email,
    code = req.body.code;

  try {
    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    await transport.sendMail({
      from: "ovidiuoviovi174@gmail.com",
      to: email,
      subject: "Reset Password Gym Application",
      html: `<h1>Reset Password Code</h1>
        <p>The code to reset your password is: ${code}</p>`,
    });

    res.status(200).json({ status: "The email has been send." });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getUser,
  register,
  login,
  googlelogin,
  updateUser,
  deleteUser,
  verifyUser,
  sendEmail,
};
