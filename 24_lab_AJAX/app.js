const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth');
const multer = require('multer');

//Constructor de express
const app = express();



app.use(session({
    secret: 'ola k ase',
    resave: false, //la sesion no se guarda en cada peticion, solo cuando haya un cambio
    saveUninitialized: false, //asegura que no se guarde una sesion que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().getMilliseconds() + '-' + file.originalname);
    },
})

app.use(multer({ storage: fileStorage}).single('archivo'));

app.set('view engine', 'ejs');
app.set('views', 'views');


//proteccion CSRF
const csrfProtection = csrf();
app.use(csrfProtection);
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});


const rutas1 = require('./routes/routes.js');
app.use('/routes', rutas1);

const rutas2 = require('./routes/2.routes.js');
app.use('/routes2', rutas2);

const lista = require('./routes/lista.routes.js');
app.use('/', lista);

const login = require('./routes/sesion.routes.js');
app.use('/', login);


//intro
app.get('/', (request, response, next) => {
    response.render('index');
});





app.listen(3000);