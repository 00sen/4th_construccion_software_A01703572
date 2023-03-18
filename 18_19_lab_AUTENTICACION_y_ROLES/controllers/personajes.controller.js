const Personaje = require('../models/genshin.model');
const Arma = require('../models/arma.model');


/* Aqui controlo la pagina de lista, donde 
imprimo en pantalla todos los personajes que tengo en 
la base de datos */
exports.getLista = (request, response, next) => {
    const cookies = request.get('Cookie') || '';
    let consultas = cookies.split('=')[1] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const id = request.params.id || 0;

    Personaje.fetch(id)
    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('lista', {
            personajes: rows,
            ultimo_personaje: request.session.ultimo_personaje || '',
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(error => {
        console.log(error);
    });
};

/* Aqui es donde controlo el post de la pagina de arriba,
donde el usuario puede ingresar un nuevo presonaje a la base
de datos*/ 


exports.getNuevo = (request, response, next) => {
    response.render('nuevo');
}

exports.postNuevo = (request, response, next) => {

    const personaje = new Personaje({
        nombre: request.body.nombre,
        elemento: request.body.elemento,
        imagen: request.body.imagen,
    });

    personaje.save()
    .then(([rows, fieldData]) => {
        request.session.ultimo_personaje = personaje.nombre;
        response.redirect('/lista')
    })
    .catch((error) => {console.log(error)});
};







