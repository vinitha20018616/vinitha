// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an Express application
const server = express();

// Import routes
const routes = require('./routes/routes');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/est")
.then(() => {
  console.log("Connected to MongoDB!");
})
.catch((error) => {
  console.log("Error connecting to database:", error);
});

// Middleware
server.use(cors());
server.use(express.json());

// Routes
server.use(routes);

// Start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, function onStart(error) {
  if (error) {
    console.error("Error starting server:", error);
  } else {
    console.log("Server started on port", PORT);
  }
});
