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

const hockeyRutas = require('./routes/hockey.routes.js');

app.use('/hockey', hockeyRutas);

app.use('/hola', (request, response, next) => {
    response.send("Hola desde la ruta numero 2");
});

app.use((request, response, nect) => {
    console.log("Tercer middleware");

    response.status(404).send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);