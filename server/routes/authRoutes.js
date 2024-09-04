// import '../config/db'
const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('../config/db'); 



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await connectDB(); 
    console.log("MongoDB URI:", process.env.MONGO_URI);

    const usersCollection = db.collection('users'); 

    
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials: user does not exist' });
    }

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials: incorrect password' });
    }

    
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});


// Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      email,
      password: await bcrypt.hash(password, 10),
    });

    await user.save();

    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
