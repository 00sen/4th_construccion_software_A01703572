const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Constructor de express
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

//Middleware finales

const rutas = require('./routes/routes');
app.use('/pagina2', rutas);

const ruta_perros = require('./routes/perros.routes');
app.use('/perros', ruta_perros);

app.get('/', (request, response, next) => {
    response.render('index');
});

app.use((request, response, nect) => {
    response.status(404).send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);