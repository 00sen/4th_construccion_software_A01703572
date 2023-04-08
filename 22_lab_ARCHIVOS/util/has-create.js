module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('crear_personaje') >= 0)) {
        return response.redirect('/lista');
    }
    next();
}