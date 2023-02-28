const express = require('express');
const bodyParser = require('body-parser');

//Constructor de express
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Middlewares generales
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();
});


//Middleware finales

app.use('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);

    let html = `
        <form action="nuevo" method="POST">
        <label for="judador">Nombre del jugador:</label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="Enviar"></input>
        </form>
    `
    response.send(html);
});

app.use('/hola', (request, response, next) => {
    response.send("Hola desde la ruta numero 2");
});

app.use((request, response, nect) => {
    console.log("Tercer middleware");
    response.send("Hola desde el tercer middleware");
});

app.listen(3000);