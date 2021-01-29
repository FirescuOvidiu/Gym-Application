const jwt = require("jsonwebtoken");

// Method used to verify if the user is authorized
const checkAuthorization = (req, res, next) => {
  let accessToken = req.header("authorization");

  // If there is no token stored in the header, the request is unauthorized
  if (!accessToken) {
    return next({
      message:
        "There is no token stored in header, the request is unauthorized.",
    });
  }

  // Used jwt.verify method to verify the access token
  try {
    return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    // Throw an error if the token has expired or has a invalid signature
    return next(erorr);
  }
};

const checkUserAuth = (req, res, next) => {
  decoded = checkAuthorization(req, res, next);
  req.user = decoded;
  next();
};

module.exports = {
  checkUserAuth,
};
