const express = require('express');
const {
    createSession,
    getSessionHistory
} = require('../controllers/sessionController'); // Import the session-related controllers

const router = express.Router();

// Route to create a new session
router.post('/create', createSession);

// Route to get session history
router.get('/history', getSessionHistory);


module.exports = router;
