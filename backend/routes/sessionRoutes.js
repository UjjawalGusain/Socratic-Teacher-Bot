const express = require('express');
const {
    getSessionHistory
} = require('../utils/sessionUtils'); // Import the session-related controllers
const {
    createNewSession
} = require('../controllers/sessionController')


const router = express.Router();

// Route to create a new session
router.post('/create', createNewSession);

// Route to get session history
router.get('/history', getSessionHistory);


module.exports = router;
