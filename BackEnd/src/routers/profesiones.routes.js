const express = require('express');
const router = express.Router();
const profesionController = require('./../controllers/profesiones.controllers');

router.get('/', profesionController.getProfesiones);
router.post('/',profesionController.createProfesion);

module.exports = router;