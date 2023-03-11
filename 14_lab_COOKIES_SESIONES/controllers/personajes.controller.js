const Personaje = require('../models/genshin.model');

exports.getLista = (request, response, next) => {
    const cookies = request.get('Cookie') || '';
    let consultas = cookies.split('=')[1] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const id = request.params.id || 0;

    Personaje.fetch(id)
    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('../views/lista', {
            personajes: rows,
            ultimo_personaje: request.session.ultimo_personaje || '',
        });
    })
    .catch(error => {
        console.log(error);
    });
};

