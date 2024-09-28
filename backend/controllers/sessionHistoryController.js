const Session = require('../models/Session'); // Import the Session model

// Function to get session history by sessionId
const getSessionHistory = async (req, res) => {
    try {
        const { sessionId } = req.params; // Get sessionId from request parameters

        // Find the session by sessionId
        const session = await Session.findOne({ sessionId });

        // Check if the session exists
        if (!session) {
            return res.status(404).json({ error: 'Session not found' });
        }

        // Respond with the messages (session history)
        res.status(200).json({ messages: session.messages });
    } catch (error) {
        console.error("Error retrieving session history:", error);
        res.status(500).json({ error: "Error retrieving session history" });
    }
};

module.exports = { getSessionHistory };
