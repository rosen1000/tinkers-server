import knex from 'knex';
let db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'admin',
        password: process.env.DB_PASSWORD,
        database: 'tinkers',
    },
});

export default db;
