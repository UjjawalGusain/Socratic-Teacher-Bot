const Session = require('../models/SessionSchema'); // Importing the Session model
const { v4: uuidv4 } = require('uuid'); // Using uuid to generate a unique sessionId

// Function to create a new session
const createSession = async () => {
    const sessionId = uuidv4();
    const newSession = new Session({
        sessionId,
        messages: []  // Initialize with an empty array of messages
    });

    // Save the session to the database
    await newSession.save();

    return sessionId;
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

module.exports = { createSession, getSessionHistory };
