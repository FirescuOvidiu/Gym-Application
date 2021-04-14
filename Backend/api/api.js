const { Router } = require("express");
const apiRouter = new Router();

const userRoutes = require("./user/router");
const gymRoutes = require("./gym/router");
const reservationRoutes = require("./reservation/router");
const workoutRoutes = require("./workout/router");

apiRouter.use("/user", userRoutes);
apiRouter.use("/gym", gymRoutes);
apiRouter.use("/reservation", reservationRoutes);
apiRouter.use("/workout", workoutRoutes);

apiRouter.use((error, req, res, next) => {
  res.status(500);
  res.send({ message: error.message || "An unknown error occurred!" });
});

module.exports = apiRouter;
