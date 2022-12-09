const fs = require('fs');
const knex = require('knex');
const createClientKnex = knex.createClient()

const clienteSql = createClientKnex({
    client: 'mysql2',
    connection: 'mysql://localhost:3306/productos', //revisar servidor
})
  
class ContenedorMysql{

    constructor(clienteMysql, tabla){
        this.cliente = clienteMysql;
        this.tabla = tabla
    }

   async save(cosa) {
        await this.cliente(this.tabla).insert(cosa)
}
    
   async getAll() {
    try {
        return await this.cliente(this.tabla).select()

   } catch{}
}

   // deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
   
    // deleteAll(): void - Elimina todos los objetos presentes en el archivo.
   
}


const contenedorDeChats = new ContenedorMysql(clienteSql, 'chat')
module.exports = contenedorDeChats