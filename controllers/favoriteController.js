// controllers/favoriteController.js

const FavoriteItem = require('../Models/FavoriteItem');

// Controller method to get favorite items
const getFavoriteItems = async (req, res) => {
    try {
        // Fetch favorite items from the database
        const favoriteItems = await FavoriteItem.find({ user: req.user.id });
        
        // Return fetched favorite items
        res.status(200).json({ message: 'Favorite items retrieved successfully', favoriteItems });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getFavoriteItems };
