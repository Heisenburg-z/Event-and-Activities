const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Adjust the path to your db.js

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Connect to the database
async function startServer() {
  await connectDB(); // Wait for the DB connection to be established
  // Routes
  const authRoutes = require('./routes/authRoutes');
  app.use('/api/auth', authRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

startServer();
