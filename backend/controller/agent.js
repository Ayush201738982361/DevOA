const Agent = require("../model/agent");

async function createNewAgent(req, res) {
  const { username, email, password, phone_number } = req.body;
  try {
    const existingAgent = await Agent.findOne({ username });
    if (existingAgent) {
      return res.status(409).json({ msg: "Agent already exists" });
    }
    const agent = Agent.createOne({ username, email, password, phone_number });
    console.log(agent);
    return res.status(201).json({ msg: "Agent Created Successfully" });
  } catch (err) {
    console.log("Error In Creating Agent : ", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

module.exports = {
  createNewAgent,
};
