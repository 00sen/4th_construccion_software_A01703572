const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Constructor de express
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutas1 = require('./routes/routes.js');
app.use('/routes', rutas1);

const rutas2 = require('./routes/2.routes.js');
app.use('/routes2', rutas2);

//intro
app.get('/', (request, response, next) => {
    response.render('index');
});





app.listen(3000);