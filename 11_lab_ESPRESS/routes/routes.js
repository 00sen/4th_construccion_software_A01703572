const express = require('express');

const router = express.Router();

router.get('/prueba1', (request, response, next) => {


    let html = `
        <form action="/hockey/nuevo" method="POST">
        <label for="judador">Tu nombre es:</label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="Enviar"></input>
        </form>
    `
    response.send(html);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    response.send("Hola "+request.body.jugador);
});

module.exports = router;