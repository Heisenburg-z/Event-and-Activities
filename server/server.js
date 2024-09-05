// Load environment variables first
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const connectDB = require('../server/config/db');

console.log(process.env); // To list all environment variables
console.log("MongoDB URI:", process.env.MONGO_URI); // Check MONGO_URI is loaded

const app = express();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

async function startServer() {
  await connectDB(); // Wait for the DB connection to be established
  // Routes
  const authRoutes = require('./routes/authRoutes');
  app.use('/api/auth', authRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

startServer();
