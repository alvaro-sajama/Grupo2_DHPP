const express = require('express');
const router = express.Router();
const empresaController = require('./../controllers/empresas.controller');

router.get('/', empresaController.getEmpresas);/* 
router.post('/',empresaController.createEmpresa); */

module.exports = router;