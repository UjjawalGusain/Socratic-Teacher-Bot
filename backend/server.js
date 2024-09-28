// Import necessary modules
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const chatRoutes = require('./routes/ChatRoutes'); // Chat route for Socratic assistant
const authRoutes = require('./routes/Auth');       // Authentication routes

// Initialize express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
const dbURI = "mongodb+srv://Sid:Si12d34@cluster0.cvrdt.mongodb.net/Auth"
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


// Define routes
app.use('/api/auth', authRoutes);      // Authentication routes
app.use('/api/chat', chatRoutes);      // Socratic assistant chat routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
