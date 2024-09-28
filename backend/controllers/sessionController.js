const Session = require('../models/SessionSchema'); // Importing the Session model
const { v4: uuidv4 } = require('uuid'); // Using uuid to generate a unique sessionId
const { withMessageHistory } = require('../utils/socraticTemplate');

// Function to create a new session
const createSession = async (req, res) => {
    try {
        // Generate a unique sessionId using uuid
        const sessionId = uuidv4();

        // Create a new session document with the generated sessionId
        const newSession = new Session({
            sessionId,
            messages: []  // Initialize with an empty array of messages
        });

        // Save the session to the database
        await newSession.save();

        // Respond with the created sessionId
        res.status(201).json({ sessionId });
    } catch (error) {
        console.error("Error creating session:", error);
        res.status(500).json({ error: "Error creating session" });
    }
};

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

// Retrieve or create session history
const getSessionHistory = async (sessionId) => {
  let session = await Session.findOne({ sessionId });
  if (!session) {
    session = new Session({ sessionId, messages: [] });
    await session.save();
  }
  return session;
};


module.exports = { handleStudentInput, getSessionHistory, createSession };
