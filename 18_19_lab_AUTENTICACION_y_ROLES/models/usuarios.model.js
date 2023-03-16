const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre;
        this.username = nuevo_usuario.username;
        this.password = nuevo_usuario.password;
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then ((password_cifrado) => {
            return db.execute(`
            INSERT INTO Usuarios (nombre, username, password)
            values (?, ?, ?)
            `, [this.nombre, this.username, password_cifrado]);
        })
        .catch((error) => {console.log(error)});
    }
    
    static fetchOne(username) {
        return db.execute(`
        SELECT *
        FROM Usuarios
        WHERE username = ?
        `, [username]);
    }
}