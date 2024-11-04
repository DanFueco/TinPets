
const express = require('express');
const router = express.Router();
const filtreController = require('../controllers/filtreController');


router.post('/appliquer', filtreController.appliquerFiltre); 
router.get('/:id', filtreController.obtenirFiltre); 

module.exports = router;
