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
