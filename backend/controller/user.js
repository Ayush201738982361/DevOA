const mongoose = require("mongoose");
const User = require("../model/user");

async function createNewUser(req, res) {
  const { username, email, password } = req.body;
  if (email) {
    res.status(409).json({ msg: "User Already Exists" });
  }
  try {
    const userdetails = await User.create({
      username,
      email,
      password,
    });
    console.log(`Created User : ${userdetails}`);
    res.status(200).json({ msg: "User Created" });
  } catch (err) {
    console.log(`Error In Creating User : ${err}`);
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      console.log("User Not Found");
      res.status(401).json({ msg: "Unauthorized" });
    }
    res.status(201).json({ msg: "User Loggedin" });
  } catch (err) {
    console.log("Error In Logging In : ", err);
  }
}

module.exports = {
  createNewUser,
  loginUser,
};
