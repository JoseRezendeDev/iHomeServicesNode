const conn = require("./dbConfig");

async function getPrestadoresByCategoriaId(categoriaId){
    const sql = 'SELECT * FROM prestador WHERE id_categoria = ?;';
    return await conn.query(sql, categoriaId);
}

async function getPrestadorByCpf(cpf){
    const sql = 'SELECT * FROM prestador where cpf = ?;';
    return await conn.query(sql, cpf);
}

module.exports = {
    getPrestadoresByCategoriaId,
    getPrestadorByCpf
}

