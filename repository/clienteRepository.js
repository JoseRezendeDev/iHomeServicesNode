const db = require("./dbConfig");

async function getClientes(){
    const sql = 'SELECT * FROM cliente;';
    const result = await db.query(sql);
    console.log(result);
    return result;
}

async function getClienteById(id){
    const sql = 'SELECT * FROM cliente where id = ?;';
    const result = await db.query(sql, id);
    console.log(result);
    return result[0];
}

module.exports = {
    getClientes,
    getClienteById
}