const userController = require("./controller");

const { checkUserAuth } = require("../middleware/auth-validation");
const { checkUser, checkBody } = require("../middleware/body-validation");

const router = require("express").Router();

// Route to register a new user with email and password
router.post("/register", checkUser, checkBody, userController.register);

// Route used to login with email and password
router.post("/login", userController.login);

module.exports = router;
