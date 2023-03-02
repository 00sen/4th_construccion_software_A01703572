const express = require('express');

const router = express.Router();

const razas = ["Beagle", "Golden", "Husky", "Dalmata", "Chihuahua", "Chilakil", "Cocker"];

router.get('/', (request, response, next) => {
    response.render('lista.ejs', {razas: razas});
});

module.exports = router;