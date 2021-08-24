import knexnest from 'knexnest'
import knexlib from 'knex'

const knex = knexlib({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
})

export {knex, knexnest}