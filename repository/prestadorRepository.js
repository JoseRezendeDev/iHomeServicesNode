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
    const sql = 'SELECT * FROM servico s LEFT JOIN avaliacao a ON s.id_avaliacao = a.id WHERE s.cpf_prestador = ?;';
    const result = await db.query(sql, cpf);
    console.log(result);
    return result;
}

async function postServico(servico) {
    const sql = 'INSERT INTO servico VALUES (?, ?, ?, ?, ?);';
    const values = [servico.data, servico.preco_total, servico.id_cliente, servico.cpf_prestador, null];
    const result = await db.query(sql, values);
    return result;
}

module.exports = {
    getPrestadoresByCategoriaId,
    getPrestadorByCpf,
    getServicosByPrestadorCpf,
    postServico
}

