// server/models/Swipe.js
const mongoose = require('mongoose');

const SwipeSchema = new mongoose.Schema({
    proprietaire: { type: mongoose.Schema.Types.ObjectId, ref: 'Proprietaire', required: true },
    animal: { type: mongoose.Schema.Types.ObjectId, ref: 'Animal', required: true },
    action: { type: String, enum: ['like', 'ignore'], required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Swipe', SwipeSchema);
