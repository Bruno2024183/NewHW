const bcrypt = require('bcrypt');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwtUtils');
const users = require('../models/users');

// Register user
const register = async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) return res.status(400).send('User already exists');

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Save user
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered successfully');
};

// Login user
const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send('Invalid credentials');

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) return res.status(400).send('Invalid credentials');

  // Generate tokens
  const accessToken = generateAccessToken({ username });
  const refreshToken = generateRefreshToken({ username });

  // Set JWT in cookies
  res.cookie('accessToken', accessToken, { httpOnly: true });
  res.cookie('refreshToken', refreshToken, { httpOnly: true });

  res.json({ accessToken, refreshToken });
};

// Refresh token
const refreshToken = (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.status(401).send('No refresh token provided');

  // Generate new access token
  const newAccessToken = generateAccessToken({ username: req.user.username });
  res.cookie('accessToken', newAccessToken, { httpOnly: true });
  res.json({ accessToken: newAccessToken });
};

module.exports = { register, login, refreshToken };