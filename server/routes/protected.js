const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Example of a protected route
router.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
