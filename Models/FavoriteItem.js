// models/FavoriteItem.js

const mongoose = require('mongoose');

const favoriteItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    // Add more fields as needed
}, { timestamps: true });

const FavoriteItem = mongoose.model('FavoriteItem', favoriteItemSchema);

module.exports = FavoriteItem;
