const express = require('express');
const { register, login, refreshToken } = require('../controllers/authController');
const { authenticateJWT } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refreshToken);

// Example of a protected route
router.get('/profile', authenticateJWT, (req, res) => {
  res.send(`Welcome, ${req.user.username}!`);
});

module.exports = router;