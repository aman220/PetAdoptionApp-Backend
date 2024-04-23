// routes/allOrdersRoutes.js

const express = require('express');
const router = express.Router();
const { getActiveOrders, getCompletedOrders, getCancelledOrders } = require('../controllers/allOrdersController');

// Route to get active orders
router.get('/active', getActiveOrders);

// Route to get completed orders
router.get('/completed', getCompletedOrders);

// Route to get cancelled orders
router.get('/cancelled', getCancelledOrders);

module.exports = router;
