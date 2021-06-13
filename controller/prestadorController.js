var express = require('express');
var router = express.Router();
const prestadorService = require('../service/prestadorService');

router.get('/categoria/:id', (req, res) => {
    console.log("getPrestadoresByCategoriaId");
    const prestadores = await prestadorService.getPrestadoresByCategoriaId(id);
    res.send(prestadores);
})

router.get('/:cpf', (req, res) => {
    console.log("getPrestadoresByCpf");
    const prestador = prestadorService.getPrestadorByCpf(cpf);
    res.send(prestador);
})

module.exports = router;