// controllers/userController.js

const User = require('../Models/User');

// Controller method to get user profile
const getUserProfile = async (req, res) => {
    try {
        // Fetch user profile from database using user ID obtained from token
        const user = await User.findById(req.userId);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller method to update user profile
const updateUserProfile = async (req, res) => {
    try {
        const { name, email, photo } = req.body;
        // Update user profile in database
        await User.findByIdAndUpdate(req.userId, { name, email, photo });
        res.status(200).json({ message: 'User profile updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getUserProfile, updateUserProfile };
