const express = require("express");
const { createNewUser } = require("../controller/user");

const router = express.Router();

router.post("/signup", createNewUser);
// router.post("/login");

module.exports = router;
