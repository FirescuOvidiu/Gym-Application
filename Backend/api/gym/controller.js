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
const deleteGym = async (req, res, next) => {};

module.exports = { getGym, createGym, updateGym, deleteGym };
