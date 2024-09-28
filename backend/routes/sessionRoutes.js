const express = require('express');
const {
    createSession,
    addMessageToSession,
    getSessionHistory
} = require('../controllers/sessionController'); // Import the session-related controllers

const router = express.Router();

// Route to create a new session
router.post('/create', createSession);

// Route to add a message to an existing session
// router.post('/:sessionId/messages', addMessageToSession);

// Route to get the session history by sessionId
// router.get('/history/:sessionId', getSessionHistory);

module.exports = router;
