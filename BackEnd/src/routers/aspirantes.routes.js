const express = require('express');
const router = express.Router();
const parser = require('../services/multerConfig');
const aspiranteController = require('./../controllers/aspirantes.controller');

router.get('/search', aspiranteController.findAspirantes);
router.get('/', aspiranteController.getAspirantes);
router.post('/',parser.single('file-upload'),aspiranteController.createAspirante);

module.exports = router;