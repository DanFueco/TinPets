const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    nom: { type: String, required: true },
    type: { type: String, required: true },
    taille: { type: String, required: true },
    sexe: { type: String, required: true },
    age: { type: Number, required: true },
    photo: { type: String, required: false },
    caracteristiques: { type: [String], required: false },
    description: { type: String, required: false },
    proprietaire: { type: Schema.Types.ObjectId, ref: 'Proprietaire', required: true } // Référence au propriétaire
});

module.exports = mongoose.model('Animal', animalSchema);
