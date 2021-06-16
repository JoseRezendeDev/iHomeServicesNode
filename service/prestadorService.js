const prestadorRepository = require('../repository/prestadorRepository');

async function getPrestadoresByCategoriaId(categoriaId) {
    return await prestadorRepository.getPrestadoresByCategoriaId(categoriaId)
}

async function getPrestadorByCpf(cpf) {
    return await prestadorRepository.getPrestadorByCpf(cpf);
}

async function getServicosByPrestadorCpf(cpf) {
    return await prestadorRepository.getServicosByPrestadorCpf(cpf);
}

module.exports = {
    getPrestadoresByCategoriaId,
    getPrestadorByCpf,
    getServicosByPrestadorCpf
};