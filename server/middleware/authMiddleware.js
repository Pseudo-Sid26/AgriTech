const jwt = require('jsonwebtoken');
const Farmer = require('../models/Farmer');

exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Farmer.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized access' });
    }
  }

  if (!token) return res.status(401).json({ message: 'No token provided' });
};
