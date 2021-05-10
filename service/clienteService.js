const clienteRepository = require('../repository/clienteRepository');

const getClientes = () => {
    let clientes = clienteRepository.getClientes();
    console.log(clientes);
    return clientes;
}

const getClienteById = (id) => {
    let cliente = clienteRepository.getClienteById(id);
    console.log(cliente);
    return cliente;
}

module.exports = {
    getClientes,
    getClienteById
};