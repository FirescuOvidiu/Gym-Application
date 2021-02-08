const Gym = require("./model");

const getGym = async (req, res, next) => {};

const createGym = async (req, res, next) => {
  try {
    let gym = new Gym(req.body);
    gym = await gym.save();

    res.status(200).json({ status: "The registration has been completed." });
  } catch (error) {
    return next(error);
  }
};

const updateGym = async (req, res, next) => {};

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

module.exports = { getGym, createGym, updateGym, deleteGym };
