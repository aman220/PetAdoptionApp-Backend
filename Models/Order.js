// models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // Define schema fields for the order
    // For example:
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    status: { type: String, enum: ['active', 'completed', 'cancelled'], default: 'active' },
    // Add more fields as needed
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
