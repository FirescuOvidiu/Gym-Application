const Gym = require("./model");

const getGym = async (req, res, next) => {
  try {
    let gym;

    if (req.params._gymId) {
      gym = await Gym.findById(req.params._gymId);
    } else {
      gym = await Gym.findOne();
    }

    if (!gym) {
      return next({ message: "The gym hasn't been found." });
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

    res.status(200).json({ status: "The gmy has been created." });
  } catch (error) {
    return next(error);
  }
};

const updateGym = async (req, res, next) => {
  try {
    let gym = await Gym.findById(req.params._gymId);

    if (!gym) {
      return next({ message: "The gym hasn't been found." });
    }

    gym.name = req.body.name || gym.name;
    gym.email = req.body.email || gym.email;
    gym.phone = req.body.phone || gym.phone;
    gym.address = req.body.address || gym.address;
    gym.openingTime = req.body.openingTime || gym.openingTime;
    gym.closingTime = req.body.closingTime || gym.closingTime;
    gym.maxUsersInGym = req.body.maxUsersInGym || gym.maxUsersInGym;
    gym.date = req.body.date || gym.date;

    gym = await gym.save();

    res.status(200).json({ status: "The gym has been updated." });
  } catch (error) {
    return next(error);
  }
};

const deleteGym = async (req, res, next) => {
  try {
    const gym = await Gym.findByIdAndDelete(req.params._gymId);

    if (!gym) {
      return next({ message: "The gym hasn't been found." });
    }

    res.status(200).json({ status: "The gym has been deleted." });
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
