const express = require('express');

const router = express.Router();

const lista = require('../controllers/personajes.controller');

router.get('/lista', lista.getLista);

router.get('/nuevo', lista.getNuevo)

router.post('/nuevo', lista.postNuevo);



module.exports = router;