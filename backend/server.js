// Import necessary modules
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const chatRoutes = require('./routes/chatRoutes'); // Chat route for Socratic assistant
const authRoutes = require('./routes/authRoutes');       // Authentication routes
const sessionRoutes = require('./routes/sessionRoutes')
const connectDB = require('./config/db')


// Initialize express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB()

// Define routes 
app.use('/api/auth', authRoutes);      // Authentication routes
app.use('/api/chat', chatRoutes);      // Socratic assistant chat routes
app.use('/api/session', sessionRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
