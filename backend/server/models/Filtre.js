const mongoose = require('mongoose');

const FiltreSchema = new mongoose.Schema({
    taille: {
        type: String,
    },
    sexe: {
        type: String,
    },
    ageMax: {
        type: Number,
    },
    proprietaire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proprietaire',
        required: true,
    },
});


module.exports = mongoose.model('Filtre', FiltreSchema);
