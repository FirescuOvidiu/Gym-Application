const { Router } = require("express");
const apiRouter = new Router();

const userRoutes = require("./user/router");
const gymRoutes = require("./gym/router");

apiRouter.use("/user", userRoutes);
apiRouter.use("/gym", gymRoutes);

apiRouter.use((error, req, res, next) => {
  res.status(500);
  res.send({ message: error.message || "An unknown error occurred!" });
});

module.exports = apiRouter;
