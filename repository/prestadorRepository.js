const conn = require("./dbConfig");

function getPrestadoresByCategoriaId(categoriaId){
    const sql = 'SELECT * FROM prestador WHERE id_categoria = ?;';
    const result = conn.query(sql, categoriaId);
    console.log(result);
    return result;
}

function getPrestadorByCpf(cpf){
    const sql = 'SELECT * FROM prestador where cpf = ?;';
    const result = conn.query(sql, cpf);
    console.log(result);
    return result;
}

module.exports = {
    getPrestadoresByCategoriaId,
    getPrestadorByCpf
}

