var express = require('express');
var router = express.Router();
const prestadorService = require('../service/prestadorService');

router.get('/categoria/:id', async function (req, res) {
    console.log("getPrestadoresByCategoriaId");
    const prestadores = await prestadorService.getPrestadoresByCategoriaId(req.params.id);
    res.send(prestadores);
});

router.get('/:cpf', async function(req, res) {
    console.log("getPrestadorByCpf");
    const prestador = await prestadorService.getPrestadorByCpf(req.params.cpf);
    res.send(prestador);
});

router.get('/:cpf/servico', async function (req, res) {
    console.log("getServicosByPrestadorCpf");
    const servicos = await prestadorService.getServicosByPrestadorCpf(req.params.cpf);
    res.send(servicos);
})

module.exports = router;