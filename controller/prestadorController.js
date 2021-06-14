var express = require('express');
var router = express.Router();
const prestadorService = require('../service/prestadorService');

router.get('/categoria/:id', (req, res) => {
    console.log("getPrestadoresByCategoriaId");
    let prestadores;
    (async () => {
        prestadores = prestadorService.getPrestadoresByCategoriaId(req.params.id);
    })
    res.send(prestadores);
})

router.get('/:cpf', (req, res) => {
    console.log("getPrestadorByCpf");
    let prestador;
    (async () => {
        prestador = prestadorService.getPrestadorByCpf(req.params.cpf);
    })
    res.send(prestador);
})

module.exports = router;