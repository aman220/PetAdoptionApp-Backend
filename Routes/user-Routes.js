// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { verifyToken } = require('../MiddleWare/authMiddleware');

// Route to get user profile
router.get('/profile', verifyToken, getUserProfile);

// Route to update user profile
router.put('/profile', verifyToken, updateUserProfile);

module.exports = router;
