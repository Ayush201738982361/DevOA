const express = require("express");
const { createNewAgent } = require("../controller/agent");

const router = express.Router();

router.post("/add-agents", createNewAgent);

module.exports = router;
