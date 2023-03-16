exports.getPrueba1 = (request, response, next) => {

    response.render('../views/prueba1.ejs');

};

exports.postPrueba1 = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    response.send("Hola "+request.body.jugador);
};


exports.getPrueba2 = (request, response, next) => {
    response.render('../views/prueba2');
};