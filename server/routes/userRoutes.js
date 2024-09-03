const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

// Protected route to get user profile
router.get('/profile', authenticateToken, (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
  });
});

module.exports = router;
