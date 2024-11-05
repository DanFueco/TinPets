// server/models/Proprietaire.js

const db = require('../config/db');

const ProprietaireModel = {
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM Proprietaire WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results[0]); // Retourne le premier résultat ou null si non trouvé
        });
    },

    createProprietaire: (nom, email, motDePasse, callback) => {
        const query = 'INSERT INTO Proprietaire (nom, email, motDePasse) VALUES (?, ?, ?)';
        db.query(query, [nom, email, motDePasse], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId); // Retourne l'ID du propriétaire créé
        });
    }
};

module.exports = ProprietaireModel;
