const express = require('express');
const bodyParser = require('body-parser');

//Constructor de express
const app = express();


app.use(bodyParser.urlencoded({extended: false}));

const rutas1 = require('./routes/routes.js');
app.use('/prueba1', rutas1);



app.listen(3000);