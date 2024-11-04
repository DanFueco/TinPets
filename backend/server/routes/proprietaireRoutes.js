const express = require('express');
const router = express.Router();
const proprietaireController = require('../controllers/proprietaireController');

// Route pour créer un nouveau propriétaire
router.post('/creer', proprietaireController.creerProprietaire);

// Route pour la connexion d'un propriétaire
router.post('/connexion', proprietaireController.seConnecter);

// Route pour obtenir la liste des propriétaires
router.get('/obtenir', proprietaireController.obtenirProprietaires);

module.exports = router;
