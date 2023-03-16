const db = require('../util/database');

module.exports = class Arma {

    constructor(){

    }

    save(){

    }

    static fetchAll(){
        return db.execute(
            `SELECT id, nombre
            FROM arma`
        );
    }

}