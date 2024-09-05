
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db'); 


exports.register = async (req, res) => {
  const { firstName, surname, email, password } = req.body;

  try {
    const db = await connectDB(); 
    const usersCollection = db.collection('users'); 

   
    let user = await usersCollection.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    
    user = {
      firstName,
      surname,
      email,
      password: hashedPassword,
    };

    
    await usersCollection.insertOne(user);

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id.toString() }, 
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ token });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await connectDB(); 
    const usersCollection = db.collection('users'); 

 
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    
    const token = jwt.sign(
      { id: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
