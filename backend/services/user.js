const jwt = require("jsonwebtoken");
const secretKey = "SecretKey@2024"; //Hardcoded as of now

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
