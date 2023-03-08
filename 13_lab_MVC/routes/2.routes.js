const express = require('express');


const router = express.Router();

const routes2 = require('../controllers/routes2.controller');

router.get('/prueba3', routes2.getPrueba3);

router.get('/prueba4', routes2.getPrueba4);
router.post('/prueba4', routes2.postPrueba4);

module.exports = router;