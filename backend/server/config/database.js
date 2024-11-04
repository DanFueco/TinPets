// server/config/database.js

const mongoose = require('mongoose');

// Fonction pour connecter à MongoDB
const connectDB = async () => {
    try {
        // Récupérer l'URI depuis les variables d'environnement
        const uri = process.env.MONGO_URI;

        // Afficher l'URI pour déboguer
        console.log("Tentative de connexion à MongoDB avec l'URI :", uri);

        // Connexion à MongoDB sans les options dépréciées
        await mongoose.connect(uri);

        console.log("Connexion à MongoDB réussie");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB", error);
        process.exit(1); // Quitter le processus en cas d'erreur
    }
};

module.exports = connectDB;
