const mysql = require('mysql2/promise');

async function query(sql, params) {
    const connection = await mysql.createConnection({
        host: "localhost",
        database: "ihomeservices",
        user: "root",
        password: "jose123"
    });
    const [results] = await connection.query(sql, params);

    connection.end();

    return results;
}

module.exports = {
    query
};