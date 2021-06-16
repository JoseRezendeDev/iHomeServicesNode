const db = require("./dbConfig");

async function getCategorias() {
    const sql = 'SELECT * FROM categoria;';
    const result = await db.query(sql);
    console.log(result);
    return result;
}

module.exports = {
    getCategorias
}

