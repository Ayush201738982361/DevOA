const mongoose = require("mongoose");
const User = require("../model/user");

async function createNewUser(req, res) {
  const { username, email, password } = req.body;
  try {
    const userdetails = await User.create({
      username,
      email,
      password,
    });
    res.status(200).json({ msg: "User Created" });
  } catch (err) {
    console.log(`Error In Creating User : ${err}`);
  }
}

module.exports = {
  createNewUser,
};
