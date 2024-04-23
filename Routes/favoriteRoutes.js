// routes/favoriteRoutes.js

const express = require('express');
const router = express.Router();
const { getFavoriteItems } = require('../controllers/favoriteController');

// Route to get favorite items
router.get('/favorites', getFavoriteItems);

module.exports = router;
