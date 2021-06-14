const prestadorRepository = require('../repository/prestadorRepository');

function getPrestadoresByCategoriaId(categoriaId) {
    return prestadorRepository.getPrestadoresByCategoriaId(categoriaId)
}

function getPrestadorByCpf(cpf) {
    const prestador = prestadorRepository.getPrestadorByCpf(cpf);
    console.log(prestador);
    return prestador;
    // prestadorRepository.getPrestadorByCpf(cpf)
    // .then(results => {
    //     console.log("service", results);
    //     return results;
    // })
    // .catch("getPrestadorByCpf falhou");
}

module.exports = {
    getPrestadoresByCategoriaId,
    getPrestadorByCpf
};