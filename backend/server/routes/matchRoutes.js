
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');


router.post('/creer', matchController.creerMatch); 
router.get('/', matchController.obtenirMatchs); 

module.exports = router;
