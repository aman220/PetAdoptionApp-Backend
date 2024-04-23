// models/Pet.js

const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    // Define schema fields for the pet
    // For example:
    name: { type: String, required: true },
    breed: { type: String },
    age: { type: Number },
    // Add more fields as needed
}, { timestamps: true });

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
