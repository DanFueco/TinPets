// server/controllers/swipeController.js
const Animal = require('../models/Animal');
const Filtre = require('../models/Filtre');
const Swipe = require('../models/Swipe');

exports.getAnimalsForSwipe = async (req, res) => {
    try {
        const proprietaireId = req.params.proprietaireId;

        // Récupère les critères de filtre du propriétaire
        const filtre = await Filtre.findOne({ proprietaire: proprietaireId });
        if (!filtre) {
            return res.status(404).json({ message: "Filtre introuvable pour ce propriétaire." });
        }

        // Récupère les animaux qui répondent aux critères de filtre
        const animaux = await Animal.find({
            taille: filtre.taille,
            sexe: filtre.sexe,
            age: { $lte: filtre.ageMax },
            proprietaire: { $ne: proprietaireId } // Exclut les animaux du propriétaire lui-même
        });

        return res.status(200).json(animaux);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

exports.swipeAnimal = async (req, res) => {
    try {
        const { proprietaireId, animalId, action } = req.body;

        if (!['like', 'ignore'].includes(action)) {
            return res.status(400).json({ message: "Action invalide. Utilisez 'like' ou 'ignore'." });
        }

        const swipe = new Swipe({ proprietaire: proprietaireId, animal: animalId, action });
        await swipe.save();

        return res.status(201).json({ message: `Animal ${action} avec succès.` });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
