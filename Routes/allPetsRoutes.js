// routes/allPetsRoutes.js

const express = require('express');
const router = express.Router();
const { getAllPets } = require('../controllers/allPetsController');

// Route to get all pets
router.get('/', getAllPets);

module.exports = router;
