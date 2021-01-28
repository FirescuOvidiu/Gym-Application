const userController = require("./controller");

const router = require("express").Router();

// Route used to login with email and password
router.post("/login", userController.login);

module.exports = router;
