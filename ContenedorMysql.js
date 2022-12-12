export class ContenedorMysql {

    constructor(clienteMysql, tabla) {
        this.cliente = clienteMysql;
        this.tabla = tabla;
    }

    async save(cosa) {
        await this.cliente(this.tabla).insert(cosa);
    }

    async getAll() {

        return await this.cliente(this.tabla).select();


    }
}
