const conn = require("./dbConfig");

async function getPrestador(){
    conn.query('SELECT * FROM prestador JOIN categoria ON prestador.id_categoria = categoria.id;', async function (err, results, fields) {
        if (err) {
            throw err;
        }
        console.log("repo", results);
        return results;
    });
}

async function getPrestadorById(cpf){
    const [rows] = await conn.query('SELECT * FROM prestador where cpf = ' + cpf + ';').catch("Query falhou");
    return rows;
}

module.exports = {
    getPrestador,
    getPrestadorById
}

