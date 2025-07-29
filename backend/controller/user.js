const User = require("../model/user");
const { setUserToken } = require("../services/user");

async function createNewUser(req, res) {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    const userdetails = await User.create({
      username,
      email,
      password,
    });
    console.log(`Created User : ${userdetails}`);
    return res.status(200).json({ msg: "User Created" });
  } catch (err) {
    console.log(`Error In Creating User : ${err}`);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      console.log("User Not Found");
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const token = setUserToken(user);
    res.cookie("token", token, { httpOnly: true });
    return res.status(201).json({ msg: "User Logged in" });
  } catch (err) {
    console.log("Error In Logging In : ", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

module.exports = {
  createNewUser,
  loginUser,
};
