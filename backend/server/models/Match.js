const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    proprietaireA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proprietaire',
        required: true,
    },
    proprietaireB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proprietaire',
        required: true,
    },
    animalA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal',
        required: true,
    },
    animalB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal',
        required: true,
    },
});


module.exports = mongoose.model('Match', MatchSchema);
