const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgre666",
    host: "localhost",
    port: 5432,
    database: "js_exercises"
});

module.exports = pool;