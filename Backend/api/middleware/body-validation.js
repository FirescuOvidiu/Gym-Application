const { check, validationResult } = require("express-validator");

const valdiationResults = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next({ message: errors.array()[0].msg });
  }
  next();
};

const isUserValid = [
  check("email")
    .notEmpty()
    .withMessage("Email is required.")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email."),
  check("username")
    .notEmpty()
    .withMessage("Username is required.")
    .isLength({ min: 8 })
    .withMessage("Username must have a minimum length of 8."),
  check("password")
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 8 })
    .withMessage("Password must have a minimum length of 8.")
    .matches(/([A-Z])+/)
    .withMessage("Password must have at least one upper letter.")
    .matches(/[a-z]+/)
    .withMessage("Password must have at least one lower letter.")
    .matches(/\d+/)
    .withMessage("Password must have at least one digit.")
    .matches(/[@$!%*?&]+/)
    .withMessage("Password must have at least one special character."),
  check("phone")
    .notEmpty()
    .withMessage("Phone is required.")
    .matches(/^\d{10}$/)
    .withMessage("Phone number must contain 10 digits."),
  check("address").notEmpty().withMessage("Address is required."),
  check("birthday")
    .notEmpty()
    .withMessage("Birthday is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("Invalid birthday date. Format YYYY-MM-DD."),
  check("gender")
    .notEmpty()
    .withMessage("Gender is required.")
    .isIn(["male", "female"])
    .withMessage("Gender should be male or female."),
  check("name.first")
    .notEmpty()
    .withMessage("First name is required.")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("First name should contain only letters."),
  check("name.last")
    .notEmpty()
    .withMessage("Last name is required.")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("Last name should contain only letters."),
];

const isGymValid = [
  check("name")
    .notEmpty()
    .withMessage("First name is required.")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name should contain only letters."),
  check("email")
    .notEmpty()
    .withMessage("Email is required.")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email."),
  check("phone")
    .notEmpty()
    .withMessage("Phone is required.")
    .matches(/^\d{10}$/)
    .withMessage("Phone number must contain 10 digits."),
  check("address").notEmpty().withMessage("Address is required."),
  check("openingTime")
    .notEmpty()
    .withMessage("Opening time is required")
    .matches(/^(\d{2}):(\d{2})$/)
    .withMessage("Invalid opening time. Format HH-MM."),
  check("closingTime")
    .notEmpty()
    .withMessage("Closing time is required")
    .matches(/^(\d{2}):(\d{2})$/)
    .withMessage("Invalid closing time. Format HH-MM."),
];

module.exports = {
  valdiationResults,
  isUserValid,
  isGymValid,
};
