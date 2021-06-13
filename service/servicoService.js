const servicoRepository = require('../repository/servicoRepository');

async function getServicosByPrestadorCpf(cpf) {
    return await servicoRepository.getServicosByPrestadorCpf(cpf);
}

async function getCategorias() {
    return await servicoRepository.getCategorias();
}

module.exports = {
    getServicosByPrestadorCpf,
    getCategorias
};