const Animal = require('../models/Animal');
const mongoose = require('mongoose');

// Ajouter un nouvel animal pour un propriétaire spécifique
exports.ajouterAnimal = async (req, res) => {
    try {
        const proprietaireId = req.params.id;

        // Vérification de la validité de l'ObjectId du propriétaire
        if (!mongoose.Types.ObjectId.isValid(proprietaireId)) {
            return res.status(400).json({ message: 'Identifiant de propriétaire invalide.' });
        }

        const { nom, type, taille, sexe, age, photo, caracteristiques, description } = req.body;

        // Créer et sauvegarder un nouvel animal
        const animal = new Animal({
            nom,
            type,
            taille,
            sexe,
            age,
            photo,
            caracteristiques,
            description,
            proprietaire: proprietaireId
        });

        await animal.save();
        return res.status(201).json({ message: 'Animal ajouté avec succès.', animal });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Obtenir tous les animaux d'un propriétaire spécifique
exports.obtenirAnimaux = async (req, res) => {
    try {
        const proprietaireId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(proprietaireId)) {
            return res.status(400).json({ message: 'Identifiant de propriétaire invalide.' });
        }

        const animaux = await Animal.find({ proprietaire: proprietaireId });
        return res.status(200).json(animaux);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un animal spécifique
exports.mettreAJourAnimal = async (req, res) => {
    try {
        const animalId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(animalId)) {
            return res.status(400).json({ message: 'Identifiant de l\'animal invalide.' });
        }

        const animal = await Animal.findByIdAndUpdate(animalId, req.body, { new: true });
        if (!animal) {
            return res.status(404).json({ message: 'Animal non trouvé.' });
        }

        return res.status(200).json(animal);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Supprimer un animal spécifique
exports.supprimerAnimal = async (req, res) => {
    try {
        const animalId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(animalId)) {
            return res.status(400).json({ message: 'Identifiant de l\'animal invalide.' });
        }

        const animal = await Animal.findByIdAndRemove(animalId);
        if (!animal) {
            return res.status(404).json({ message: 'Animal non trouvé.' });
        }

        return res.status(204).json({ message: 'Animal supprimé avec succès.' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
