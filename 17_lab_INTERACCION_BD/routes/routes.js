const express = require('express');

const router = express.Router();

const routes = require('../controllers/routes.controller');

router.get('/prueba1', routes.getPrueba1);

router.post('/prueba1', routes.postPrueba1);

router.get('/prueba2', routes.getPrueba2);

module.exports = router;