import knex from 'knex';

knex.schema.createTable('chat', table => {
    table.string('email')
    table.string('mensaje')
    
})
    .then(()=> console.log('creaste tabla'))
    .catch((err) => {console.log(err); throw err} )
    .finally(() => {
        knex.destroy();
    });

