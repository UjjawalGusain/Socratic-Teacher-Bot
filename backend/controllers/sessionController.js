const { createSession, getSessionHistory } = require('../utils/sessionUtils'); // Update import path
const { withMessageHistory } = require('../utils/socraticTemplate');

// Controller to handle student input and get AI response
const handleStudentInput = async (req, res) => {
  const { studentInput, sessionId } = req.body;

  try {
    const response = await withMessageHistory(studentInput, sessionId);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to create a new session
const createNewSession = async (req, res) => {
    try {
        const sessionId = await createSession(); // Call the utility function
        res.status(201).json({ sessionId });
    } catch (error) {
        console.error("Error creating session:", error);
        res.status(500).json({ error: "Error creating session" });
    }
};

module.exports = { handleStudentInput, getSessionHistory, createNewSession };
