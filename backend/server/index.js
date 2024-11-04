// server/index.js

const express = require('express');
const connectDB = require('./config/database'); // Assure-toi que le chemin est correct
const proprietaireRoutes = require('./routes/proprietaireRoutes');
const animalRoutes = require('./routes/animalRoutes');
const matchRoutes = require('./routes/matchRoutes');
const messageRoutes = require('./routes/messageRoutes');
const filtreRoutes = require('./routes/filtreRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

require('dotenv').config();

const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour analyser les données JSON
app.use(express.json());

// Routes
app.use('/api/proprietaires', proprietaireRoutes);
app.use('/api/animaux', animalRoutes);
app.use('/api/matchs', matchRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/filtres', filtreRoutes);
app.use('/api/notifications', notificationRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
