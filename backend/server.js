const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/Auth');

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

// Authentication routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
