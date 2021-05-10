const connect = require("./dbConfig");

async function getClientes(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}

async function getClienteById(id){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes where id = ' + id + ';');
    return rows;
}

module.exports = {
    getClientes,
    getClienteById
}