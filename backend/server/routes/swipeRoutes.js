// server/routes/swipeRoutes.js
const express = require('express');
const router = express.Router();
const swipeController = require('../controllers/swipeController');

// Route pour récupérer les animaux à swiper pour un propriétaire donné
router.get('/:proprietaireId', swipeController.getAnimalsForSwipe);

// Route pour aimer ou ignorer un animal
router.post('/action', swipeController.swipeAnimal);

module.exports = router;
