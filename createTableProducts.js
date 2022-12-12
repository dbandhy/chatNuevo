import knex from "knex"

knex.schema.hasTable('productos')
    .then(exists => {
        if (!exists) {
            knex.schema.createTable('productos', tabla => {
                tabla.string('id'),
                    tabla.string('producto'),
                    tabla.integer('precio')
            })
                .then(() => {
                    console.log('tabla "producto" creada!')
                })
        } else {
            console.log('la tabla "producto" ya existe. no se realizaron cambios')
        }
    })
    .finally(() => {
        knex.destroy()
    })