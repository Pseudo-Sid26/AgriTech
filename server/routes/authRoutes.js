// authRoutes.js
const express = require('express');
const { registerFarmer, loginFarmer, getFarmerProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// POST /api/auth/register
router.post('/register', registerFarmer); // Register route

// POST /api/auth/login
router.post('/login', loginFarmer); // Login route

// GET /api/auth/profile (Protected route)
router.get('/profile', protect, getFarmerProfile); // Profile route

module.exports = router;
