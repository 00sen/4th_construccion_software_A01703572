const fileSystem = require('fs');

exports.getPrueba3 = (request, response, next) => {
    let html = `
    <h2>texto 3</h2>
    `

    response.send(html);
};

exports.getPrueba4 = (request, response, next) => {
    let html = `
    <h2>prueba post 2</h2>
    <form action="/routes2/prueba4" method="POST">
    <label for="texto_prueba">Texto prueba:</label>
    <input type="text" id="texto_prueba" name="texto_prueba">
    <input type="submit" value="Enviar"></input>
    </form>
    `

    response.send(html);
};

exports.postPrueba4 = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.texto_prueba);
    fileSystem.writeFileSync('texto.txt', request.body.texto_prueba);
    response.send("Ya se escribio "+request.body.texto_prueba + " en un archivo .txt");
};