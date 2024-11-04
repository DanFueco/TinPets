// routes/proprietaireRoutes.js

const express = require('express');
const Proprietaire = require('../models/Proprietaire'); // Assure-toi du bon chemin
const router = express.Router();

// Route pour l'inscription
router.post('/', async (req, res) => {
    const { nom, email, motDePasse } = req.body;

    try {
        const proprietaire = new Proprietaire({
            nom,
            email,
            motDePasse,
        });

        await proprietaire.save(); // Enregistre le propriétaire dans la base de données
        res.status(201).json({ message: 'Propriétaire créé avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        res.status(400).json({ message: 'Erreur lors de l\'inscription, vérifiez vos données.' });
    }
});

// Autres routes...

module.exports = router;
