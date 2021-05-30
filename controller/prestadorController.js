var express = require('express');
var router = express.Router();
const prestadorService = require('../service/prestadorService');

router.get('/', (req, res) => {
    console.log("getPrestadores");
    const prestadores = await prestadorService.getPrestadores();
    res.send(prestadores);
})

router.get('/:id', (req, res) => {
    console.log("getPrestadoresById chamado");
    const prestador = prestadorService.getPrestadorById(req.params.id);
    res.send(prestador);
})

module.exports = router;