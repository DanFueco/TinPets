// server/controllers/filtreController.js
const Filtre = require('../models/Filtre');

// Appliquer un filtre
exports.appliquerFiltre = async (req, res) => {
    try {
        const { taille, sexe, ageMax, proprietaire } = req.body;
        const filtre = new Filtre({ taille, sexe, ageMax, proprietaire });
        await filtre.save();
        return res.status(201).json({ message: 'Filtre appliqué avec succès.' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Obtenir le filtre d'un propriétaire
exports.obtenirFiltre = async (req, res) => {
    try {
        const filtre = await Filtre.findOne({ proprietaire: req.params.id });
        return res.status(200).json(filtre);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
