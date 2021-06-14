var express = require('express');
var router = express.Router();
const servicoService = require('../service/servicoService');

router.get('/', (req, res) => {
    console.log("getServicosByPrestadorCpf");
    let servicos;
    (async () => {
        servicos = await servicoService.getServicosByPrestadorCpf();
    })
    res.send(servicos);
})

router.get('/:id', (req, res) => {
    console.log("getCategorias");
    let categorias;
    (async () => {
        categorias = await servicoService.getCategorias();
    })
    res.send(categorias);
})

module.exports = router;