const Gym = require("./model");

const getGym = async (req, res, next) => {
  try {
    let gym;

    if (req.params._id) {
      gym = await Gym.findById(req.params._id);
    } else {
      gym = await Gym.findOne();
    }

    if (!gym) {
      return next({ message: "The gym was not found." });
    }

    res.status(200).json({ gym });
  } catch (error) {
    return next(error);
  }
};

const createGym = async (req, res, next) => {
  try {
    let gym = new Gym(req.body);
    gym = await gym.save();

    res.status(200).json({ status: "The registration has been completed." });
  } catch (error) {
    return next(error);
  }
};

const updateGym = async (req, res, next) => {
  try {
    let gym = await Gym.findById(req.params._id);

    if (!gym) {
      return next({ message: "The gym was not found." });
    }

    gym.name = req.body.name || gym.name;
    gym.email = req.body.email || gym.email;
    gym.phone = req.body.phone || gym.phone;
    gym.address = req.body.address || gym.address;
    gym.birthday = req.body.birthday || gym.birthday;
    gym.openingTime = req.body.openingTime || gym.openingTime;
    gym.closingTime = req.body.closingTime || gym.closingTime;
    gym.usersInGym = req.body.usersInGym || gym.usersInGym;
    gym.maxUsersInGym = req.body.maxUsersInGym || gym.maxUsersInGym;
    gym.reservations = req.body.reservations || gym.reservations;

    gym = await gym.save();

    res.status(200).json({ status: "The gym was updated." });
  } catch (error) {
    return next(error);
  }
};

const deleteGym = async (req, res, next) => {
  try {
    const gym = await Gym.findByIdAndDelete(req.params._id);

    if (!gym) {
      return next({ message: "The gym was not found." });
    }

    res.status(200).json({ status: "The gym was deleted." });
  } catch (error) {
    if (error) {
      return next(error);
    }
  }
};

module.exports = {
  getGym,
  createGym,
  updateGym,
  deleteGym,
};
