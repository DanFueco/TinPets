// server/controllers/proprietaireController.js

const ProprietaireModel = require('../models/Proprietaire'); // Importez le modèle

// Fonction pour tester la connexion
exports.testConnection = (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
            console.error('Erreur de connexion à la base de données:', err);
            return res.status(500).json({ message: 'Erreur de connexion à la base de données' });
        }
        res.json({ message: 'Connexion à la base de données réussie', results });
    });
};

// Fonction pour l'inscription (signup)
exports.creerProprietaire = (req, res) => {
    const { nom, email, motDePasse } = req.body;

    // Vérifier si tous les champs requis sont présents
    if (!nom || !email || !motDePasse) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    // Vérifier si l'email est déjà utilisé
    ProprietaireModel.findByEmail(email, (err, proprietaire) => {
        if (err) {
            console.error('Erreur lors de la vérification de l\'email:', err);
            return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
        }

        if (proprietaire) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
        }

        // Insérer le nouveau propriétaire dans la base de données
        ProprietaireModel.createProprietaire(nom, email, motDePasse, (err, proprietaireId) => {
            if (err) {
                console.error('Erreur lors de l\'insertion du propriétaire:', err);
                return res.status(500).json({ message: 'Erreur lors de la création du propriétaire' });
            }

            res.status(201).json({ message: 'Propriétaire créé avec succès', proprietaireId });
        });
    });
};

// Fonction pour la connexion (login)
exports.seConnecter = (req, res) => {
    const { email, motDePasse } = req.body;

    if (!email || !motDePasse) {
        return res.status(400).json({ message: 'Email et mot de passe sont requis.' });
    }

    ProprietaireModel.findByEmail(email, (err, proprietaire) => {
        if (err) {
            console.error('Erreur lors de la connexion:', err);
            return res.status(500).json({ message: 'Erreur lors de la connexion' });
        }

        if (!proprietaire || proprietaire.motDePasse !== motDePasse) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
        }

        res.status(200).json({ message: 'Connexion réussie', proprietaire });
    });
};
