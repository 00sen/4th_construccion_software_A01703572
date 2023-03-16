const fileSystem = require('fs');

exports.getPrueba3 = (request, response, next) => {
    response.render('../views/prueba3');
};

exports.getPrueba4 = (request, response, next) => {
    response.render('../views/prueba4');
};

exports.postPrueba4 = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.texto_prueba);
    fileSystem.writeFileSync('texto.txt', request.body.texto_prueba);
    response.send("Ya se escribio '"+request.body.texto_prueba + "' en un archivo .txt");
};