const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Adjust path as necessary
const authRoutes = require('./routes/authRoutes'); // Adjust path as necessary

require('dotenv').config(); // Load environment variables from .env

const app = express();

// CORS Configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*', // Adjust as needed
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Connect to Database
connectDB().then(() => {
  // Start the server only after successful database connection
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1); // Exit process if database connection fails
});

// Routes
app.use('/api/auth', authRoutes);
