const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.log(`Error in connecting database : ${err}`);
  }
};

module.exports = {
  connectDB,
};
