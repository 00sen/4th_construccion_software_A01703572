const express = require('express');

const router = express.Router();

const lista = require('../controllers/personajes.controller');

router.get('/lista', lista.getLista);


module.exports = router;