const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
    dropDups: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  phone: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  birthday: {
    type: Date,
    min: "1900-01-01",
    default: "1900-01-01",
  },
  gender: {
    type: String,
    default: "",
  },
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  date: { type: Date, default: Date.now },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  status: {
    type: String,
    enum: ["Pending", "Active"],
    default: "Pending",
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
});

userSchema.options.toJSON = {
  getters: true,
  virtuals: true,
  minimize: false,
  transform: function (doc, ret, options) {
    delete ret.password;
    return ret;
  },
};

module.exports = mongoose.model("User", userSchema);
