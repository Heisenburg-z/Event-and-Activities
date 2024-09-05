require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
 // Ensure dotenv is loaded early

const uri = process.env.MONGO_URI;
console.log("MONGO_URI from .env:", process.env.MONGO_URI);
console.log("JWT_SECRET from .env:", process.env.JWT_SECRET);

if (!uri) {
  console.error("MONGO_URI not defined in .env file.");
  process.exit(1); // Exit if no URI is provided
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("WitsEvents"); // Ensure the correct database name
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit process if connection fails
  }
}

module.exports = connectDB;
