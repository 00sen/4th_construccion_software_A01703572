const express = require('express');

const router = express.Router();

const sesion = require('../controllers/sesion.controller');

router.get('/signup', sesion.signup);

module.exports = router;