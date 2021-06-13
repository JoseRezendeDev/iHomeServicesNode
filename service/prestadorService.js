const prestadorRepository = require('../repository/prestadorRepository');

async function getPrestadoresByCategoriaId(categoriaId) {
    return await prestadorRepository.getPrestadoresByCategoriaId(categoriaId)
}

async function getPrestadorByCpf(cpf) {
    return await prestadorRepository.getPrestadorById(cpf);
}

module.exports = {
    getPrestadoresByCategoriaId,
    getPrestadorByCpf
};