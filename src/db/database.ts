import knex from 'knex';
let db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'admin',
        password: 'haha no',
        database: 'tinkers',
    },
});

export default db
