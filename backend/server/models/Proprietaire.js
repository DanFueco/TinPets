// server/models/Proprietaire.js

const mongoose = require('mongoose');

const proprietaireSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true }
});

const Proprietaire = mongoose.model('Proprietaire', proprietaireSchema);

module.exports = Proprietaire;
