// controllers/homeController.js

// Import models or any necessary dependencies
const Banner = require('../models/Banner');
const Category = require('../models/Category');
const Product = require('../models/Product');

// Controller method to get data for home page
const getHomePageData = async (req, res) => {
    try {
        // Fetch data for home page (e.g., banners, categories, products, etc.)
        const banners = await Banner.find();
        const categories = await Category.find();
        const products = await Product.find();
        
        // Return fetched data
        res.status(200).json({ message: 'Data for home page retrieved successfully', banners, categories, products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getHomePageData };
