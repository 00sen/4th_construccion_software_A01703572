const express = require('express');

const router = express.Router();

const login = require('../controllers/usuarios.controller');

router.get('/login', login.get_login);

router.post('/login', login.post_login);

router.get('/signup', login.get_signup);

router.post('/signup', login.post_signup);

router.get('/logout', login.logout);

module.exports = router;