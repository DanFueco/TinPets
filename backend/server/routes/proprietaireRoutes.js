// server/routes/proprietaireRoutes.js

const express = require('express');
const router = express.Router();
const proprietaireController = require('../controllers/proprietaireController');

// Route de test de connexion (déjà existante)
router.get('/test-connection', proprietaireController.testConnection);

// Route pour le signup
router.post('/signup', proprietaireController.creerProprietaire);

// Route pour le login
router.post('/login', proprietaireController.seConnecter);

module.exports = router;
