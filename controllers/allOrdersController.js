// controllers/allOrdersController.js

// Import the Order model or any necessary dependencies
const Order = require('../Models/Order');

// Controller method to get active orders
const getActiveOrders = async (req, res) => {
    try {
        // Fetch active orders from the database
        const activeOrders = await Order.find({ status: 'active' });
        
        // Return fetched active orders
        res.status(200).json({ message: 'Active orders retrieved successfully', activeOrders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller method to get completed orders
const getCompletedOrders = async (req, res) => {
    try {
        // Fetch completed orders from the database
        const completedOrders = await Order.find({ status: 'completed' });
        
        // Return fetched completed orders
        res.status(200).json({ message: 'Completed orders retrieved successfully', completedOrders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller method to get cancelled orders
const getCancelledOrders = async (req, res) => {
    try {
        // Fetch cancelled orders from the database
        const cancelledOrders = await Order.find({ status: 'cancelled' });
        
        // Return fetched cancelled orders
        res.status(200).json({ message: 'Cancelled orders retrieved successfully', cancelledOrders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getActiveOrders, getCompletedOrders, getCancelledOrders };
