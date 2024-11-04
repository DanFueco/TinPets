const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Route pour ajouter un nouvel animal pour un propriétaire spécifique
router.post('/:id/ajouter', animalController.ajouterAnimal);

// Route pour obtenir tous les animaux d'un propriétaire spécifique
router.get('/:id/animaux', animalController.obtenirAnimaux);

// Route pour mettre à jour un animal par son ID
router.put('/:id', animalController.mettreAJourAnimal);

// Route pour supprimer un animal par son ID
router.delete('/:id', animalController.supprimerAnimal);

module.exports = router;
