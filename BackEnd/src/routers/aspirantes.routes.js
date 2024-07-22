const express = require('express');
const router = express.Router();
const aspiranteController = require('./../controllers/aspirantes.controller');

router.get('/', aspiranteController.getAspirantes);
router.post('/',aspiranteController.createAspirante);

module.exports = router;