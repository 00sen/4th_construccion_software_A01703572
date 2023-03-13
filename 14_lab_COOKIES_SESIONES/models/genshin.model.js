const db = require('../util/database.js');

module.exports = class Personaje {

    constructor(personaje){
    this.nombre = personaje.nombre;
    this.elemento = personaje.elemento;
    this.imagen = personaje.imagen;
    }

    save() {
        return db.execute(
            `INSERT INTO Personaje(nombre, elemento, imagen) VALUES
                (?, ?, ?)`,
                [this.nombre, this.elemento, this.imagen]
        );
    }

    static fetch(id) {
        let query = 'SELECT * FROM Personaje';
        if(id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        }
        return db.execute(query);
    }
}



