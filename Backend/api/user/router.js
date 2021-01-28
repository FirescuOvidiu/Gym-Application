const userController = require("./controller");

const router = require("express").Router();

// Route to register a new user with email and password
router.post("/register", userController.register);

// Route used to login with email and password
router.post("/login", userController.login);

module.exports = router;
