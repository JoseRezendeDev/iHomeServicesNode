const db = require("./dbConfig");

async function getPrestadoresByCategoriaId(categoriaId){
    const sql = 'SELECT * FROM prestador WHERE id_categoria = ?;';
    const result = await db.query(sql, categoriaId);
    console.log(result);
    return result;
}

async function getPrestadorByCpf(cpf){
    const sql = 'SELECT * FROM prestador WHERE cpf = ?;';
    const result = await db.query(sql, cpf);
    console.log(result);
    return result[0];
}

async function getServicosByPrestadorCpf(cpf) {
    const sql = 'SELECT * FROM servico s JOIN avaliacao a ON s.id_avaliacao = a.id WHERE s.cpf_prestador = ?;';
    const result = await db.query(sql, cpf);
    console.log(result);
    return result;
}

module.exports = {
    getPrestadoresByCategoriaId,
    getPrestadorByCpf,
    getServicosByPrestadorCpf
}

