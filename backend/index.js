const express = require("express");
const { connectDB } = require("./connection");
const app = express();
const PORT = 8000;

connectDB("mongodb://127.0.0.1:27017/Agent").then(() => {
  console.log("Mongo DB Connected!!");
});

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
