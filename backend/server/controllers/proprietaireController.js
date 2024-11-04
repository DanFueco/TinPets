// server/controllers/proprietaireController.js

const Proprietaire = require('../models/Proprietaire');

// Fonction pour créer un nouveau propriétaire
exports.creerProprietaire = async (req, res) => {
    try {
        const { nom, email, motDePasse } = req.body;

        // Vérifier si tous les champs requis sont présents
        if (!nom || !email || !motDePasse) {
            return res.status(400).json({ message: 'Tous les champs sont requis.' });
        }

        // Vérifier si l'email est déjà utilisé
        const proprietaireExistant = await Proprietaire.findOne({ email });
        if (proprietaireExistant) {
            return res.status(400).json({ message: 'Email déjà utilisé.' });
        }

        // Créer un nouveau propriétaire
        const nouveauProprietaire = new Proprietaire({ nom, email, motDePasse });
        await nouveauProprietaire.save();

        res.status(201).json({ message: 'Propriétaire créé avec succès', proprietaire: nouveauProprietaire });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du propriétaire' });
    }
};

// Fonction pour se connecter
exports.seConnecter = async (req, res) => {
    try {
        const { email, motDePasse } = req.body;

        // Vérifier si l'utilisateur existe
        const proprietaire = await Proprietaire.findOne({ email, motDePasse });
        if (!proprietaire) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        res.status(200).json({ message: 'Connexion réussie', proprietaire });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la connexion' });
    }

   
};

// Fonction pour obtenir la liste des propriétaires
exports.obtenirProprietaires = async (req, res) => {
    try {
      const proprietaires = await Proprietaire.find(); // Récupère tous les propriétaires
      res.status(200).json(proprietaires); // Renvoie les propriétaires sous forme de JSON
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des propriétaires", error });
    }
};