const express = require("express");
const { connectDB } = require("./connection");
const userRoutes = require("./routes/userRoutes");
const agentRoutes = require("./routes/agentRoutes");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/user", userRoutes);
app.use("/agent", agentRoutes);

connectDB("mongodb://127.0.0.1:27017/Agent").then(() => {
  console.log("Mongo DB Connected!!");
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
