const categoriaRepository = require('../repository/categoriaRepository');

async function getCategorias() {
    return await categoriaRepository.getCategorias();
}

module.exports = {
    getCategorias
};