const conn = require("./dbConfig");

async function getServicosByPrestadorCpf(cpf) {
    const sql = 'SELECT * FROM servico WHERE cpf_prestador = ?;';
    return await conn.query(sql, cpf);
}

async function getCategorias() {
    const sql = 'SELECT * FROM categoria;';
    return await conn.query(sql);
}

module.exports = {
    getServicosByPrestadorCpf,
    getCategorias
}

