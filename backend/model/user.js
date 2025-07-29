const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    trype: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
