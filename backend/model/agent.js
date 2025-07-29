const mongoose = require("mongoose");

const agentSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Agent = mongoose.model("agent", agentSchema);

module.exports = Agent;
