exports.getPrueba1 = (request, response, next) => {

    let html = `
        <form action="/routes/prueba1" method="POST">
        <label for="judador">Tu nombre es:</label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="Enviar"></input>
        </form>
    `
    response.send(html);

};

exports.postPrueba1 = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    response.send("Hola "+request.body.jugador);
};


exports.getPrueba2 = (request, response, next) => {
    let html = `
    <h1>texto prueba 2, nada especial</h1>
    `
    response.send(html);
};