const prestadorRepository = require('../repository/prestadorRepository');

async function getPrestadores() {
    prestadorRepository.getPrestadores()
    .then(prestadores => {
        console.log("service", prestadores);
        return prestadores;
    });
}

const getPrestadorById = (id) => {
    let prestador = prestadorRepository.getPrestadorById(id);
    console.log(prestador);
    return prestador;
}

module.exports = {
    getPrestadores,
    getPrestadorById
};