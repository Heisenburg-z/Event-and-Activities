


const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =process.env.MONGO_URI;
console.log("MongoDB URI:", uri);
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("WitsEvents"); 
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

module.exports = connectDB;
