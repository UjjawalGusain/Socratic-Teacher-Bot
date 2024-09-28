const express = require("express");
const { chatWithAssistant } = require("../controllers/chatController");

const router = express.Router();

// POST route for student input to the Socratic assistant
router.post("/chat", chatWithAssistant);

module.exports = router;
