const clienteRepository = require('../repository/clienteRepository');

async function getClientes() {
    return await clienteRepository.getClientes();
}

async function getClienteById(id) {
    return await clienteRepository.getClienteById(id);
}

module.exports = {
    getClientes,
    getClienteById
};