const Contenedor = require("./desafio")
const knex = require('knex')
const mysql = new Contenedor()

class contenedorMysql {
    constructor(clienteMysql){
        this.cliente = clienteMysql
    }

    async guardar(cosa) {
        await this.cliente.insert(cosa).into()
    }
}