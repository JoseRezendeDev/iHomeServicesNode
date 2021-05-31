const conn = require("./dbConfig");

// tentei por o async nessa function e usar o codigo comentado do service mas tambem nao deu
function getClientes(){
    conn.query('SELECT * FROM cliente;', function (err, results, fields) {
        if (err) {
            throw err;
        }
        console.log("repository", results);
        return results;
    });
}

function getClienteById(id){
    const [rows] = conn.query('SELECT * FROM cliente where id = ' + id + ';').catch("Query falhou");
    return rows;
}

module.exports = {
    getClientes,
    getClienteById
}