// controllers/allPetsController.js

// Import the Pet model or any necessary dependencies
const Pet = require('../Models/Pet');

// Controller method to get all pets
const getAllPets = async (req, res) => {
    try {
        // Fetch all pets from the database
        const pets = await Pet.find();
        
        // Return fetched pets
        res.status(200).json({ message: 'All pets retrieved successfully', pets });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllPets };
