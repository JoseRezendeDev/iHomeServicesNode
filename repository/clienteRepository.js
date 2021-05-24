const conn = require("./dbConfig");

function getClientes(){
    conn.query('SELECT * FROM cliente;', function (err, results, fields) {
        if (err) {
            throw err;
        }
        console.log("repo", results);
        return results;
    });
}

async function getClienteById(id){
    const [rows] = await conn.query('SELECT * FROM cliente where id = ' + id + ';').catch("Query falhou");
    return rows;
}

module.exports = {
    getClientes,
    getClienteById
}