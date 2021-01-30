const userController = require("./controller");

const { checkUserAuth } = require("../middleware/auth-validation");
const { checkUser, checkBody } = require("../middleware/body-validation");

const router = require("express").Router();

// Route used to get user informations
router.get("/", checkUserAuth, userController.getUser);

// Route used to register a new user with email and password
router.post("/register", checkUser, checkBody, userController.register);

// Route used to login with email and password
router.post("/login", userController.login);

// Route used to update a user
router.put("/", checkUserAuth, userController.updateUser);

module.exports = router;
