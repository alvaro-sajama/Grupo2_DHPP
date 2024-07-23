const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/main');

router.get('/', mainControllers.index);
router.get('/image', mainControllers.uploadImage);

module.exports = router;