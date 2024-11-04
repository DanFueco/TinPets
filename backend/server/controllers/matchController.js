// server/controllers/matchController.js
const Match = require('../models/Match');

// Créer un match
exports.creerMatch = async (req, res) => {
    try {
        const { proprietaireA, proprietaireB, animalA, animalB } = req.body;
        const match = new Match({ proprietaireA, proprietaireB, animalA, animalB });
        await match.save();
        return res.status(201).json({ message: 'Match créé avec succès.' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Obtenir tous les matchs
exports.obtenirMatchs = async (req, res) => {
    try {
        const matchs = await Match.find();
        return res.status(200).json(matchs);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
