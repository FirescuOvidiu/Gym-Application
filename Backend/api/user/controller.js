const register = async (req, res) => {
  res.status(200).send("Register Succesful");
};

const login = async (req, res) => {
  res.status(200).send("Login Succesful");
};

module.exports = {
  register,
  login,
};
