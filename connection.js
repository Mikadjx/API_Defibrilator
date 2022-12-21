// Paramétrage de connexion à la base de donnée PostgreSQL qui sera exporter ver connection.js


const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "yoba",
    database: "lifeAz"

})

module.exports = client