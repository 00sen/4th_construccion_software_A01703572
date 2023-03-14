
exports.signup = (request, response, next) => {

    response.render('signup');

};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/');
    });
};