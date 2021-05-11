const UsersInGym = require("./model");

const getUsersFromGym = async (req, res, next) => {
  try {
    const usersInGym = await UsersInGym.find({ gym: req.params._gymId });

    res.status(200).json({ usersInGym });
  } catch (error) {
    return next(error);
  }
};

const createUserInGym = async (req, res, next) => {
  try {
    let userInGym = new UsersInGym(req.body);
    userInGym = await userInGym.save();

    res
      .status(200)
      .json({ status: "The user has entered the gym.", userInGym });
  } catch (error) {
    return next(error);
  }
};

const deleteUserFromGym = async (req, res, next) => {
  try {
    const userInGym = await UsersInGym.findByIdAndDelete(
      req.params._userInGymId
    );

    if (!userInGym) {
      return next({ message: "The user isn't in the gym." });
    }

    res.status(200).json({ status: "The user has left the gym.", userInGym });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getUsersFromGym,
  createUserInGym,
  deleteUserFromGym,
};
