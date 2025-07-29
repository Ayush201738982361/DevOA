const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

function setUserToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  const token = jwt.sign(payload, secretKey, { expiresIn: "2h" });
  return token;
}

function getUserToken(token) {
  try {
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (err) {
    console.log(`Error In Verifying User Token : ${token}`);
  }
}

module.exports = {
  setUserToken,
  getUserToken,
};
