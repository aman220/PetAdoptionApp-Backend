// routes/homeRoutes.js

const express = require('express');
const router = express.Router();
const { getHomePageData } = require('../controllers/homeController');

// Route to get data for home page
router.get('/', getHomePageData);

module.exports = router;
