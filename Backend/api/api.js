const { Router } = require("express");
const apiRouter = new Router();

apiRouter.use((error, res) => {
  res.status(error.code || 500);
  res.send({ message: error.message || "An unknown error occurred!" });
});

module.exports = apiRouter;
