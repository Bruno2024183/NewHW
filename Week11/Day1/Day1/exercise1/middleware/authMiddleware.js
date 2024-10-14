const jwt = require('jsonwebtoken');

// Middleware to authenticate JWTs
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(403).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).send('Invalid token');
  }
};

module.exports = { authenticateJWT };