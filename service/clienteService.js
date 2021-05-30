const clienteRepository = require('../repository/clienteRepository');

async function getClientes() {
    // clienteRepository.getClientes()
    // .then(results => {
    //     console.log("service", results);
    //     return results;
    // })
    // .catch("getClientes falhou");
    clienteRepository.getClientes()
    .then(clientes => {
        console.log("service", clientes);
        return clientes;
    });
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