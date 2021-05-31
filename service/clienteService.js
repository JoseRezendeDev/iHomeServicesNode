const clienteRepository = require('../repository/clienteRepository');

function getClientes() {
    const clientes = clienteRepository.getClientes();
    console.log('service', clientes);
    return clientes;
    // clienteRepository.getClientes()
    // .then(results => {
    //     console.log("service", results);
    //     return results;
    // })
    // .catch("getClientes falhou");
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