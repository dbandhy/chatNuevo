class Contenedor {
    constructor() {
        this.cosas = [];
    }
    save(cosa) {
        this.cosas.push(cosa)
    }
    getAll() {
        return this.cosas
    }
}

export const contenedorDeProductos = new Contenedor


// import fs from 'fs';
// import knex from 'knex'
// import {createClientKnex} from 'knex'
//const createClientKnex = knex.createClient()

// const clienteSql = createClientKnex({
//     client: 'mysql2',
//     connection: 'mysql://localhost:3306/mensajes', //revisar servidor
// })
  
// class ContenedorMysql{

//     constructor(clienteMysql, tabla){
//         this.cliente = clienteMysql;
//         this.tabla = tabla
//     }

//    async save(cosa) {
//         await this.cliente(this.tabla).insert(cosa)
// }
    
//    async getAll() {
//     try {
//         return await this.cliente(this.tabla).select()

//    } catch{}
// }

//    // deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
   
//     // deleteAll(): void - Elimina todos los objetos presentes en el archivo.
   
// }

// export const contenedorDeChats = new contenedorMysql
// export const contenedorDeChats = new ContenedorMysql(clienteSql, 'mensajes')
// module.exports = contenedorDeChats
