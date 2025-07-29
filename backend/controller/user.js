const mongoose = require("mongoose");

async function createNewUser(req, res) {
  const { username, email, password } = req.body;
  try {
    const userdetails = await mongoose.create({
      username,
      email,
      password,
    });
    if (res.status === 201) {
      return r;
    }
    console.log("User Created:", userdetails);
  } catch (err) {
    console.log(`Error In Creating User : ${err}`);
  }
}

module.exports = {
  createNewUser,
};
