var express = require('express');
var router = express.Router();
const prestadorService = require('../service/prestadorService');
const { setHeaderToResponse } = require('./controllerUtils');

router.get('/categoria/:id', async function (req, res) {
    console.log("getPrestadoresByCategoriaId");
    const prestadores = await prestadorService.getPrestadoresByCategoriaId(req.params.id);
    setHeaderToResponse(res);
    res.send(prestadores);
});

router.get('/:cpf', async function(req, res) {
    console.log("getPrestadorByCpf");
    const prestador = await prestadorService.getPrestadorByCpf(req.params.cpf);
    setHeaderToResponse(res);
    res.send(prestador);
});

router.get('/:cpf/servico', async function (req, res) {
    console.log("getServicosByPrestadorCpf");
    const servicos = await prestadorService.getServicosByPrestadorCpf(req.params.cpf);
    setHeaderToResponse(res);
    res.send(servicos);
});

// esse endpoint POST não ta conseguindo pegar o body da req
router.post('/servico', async function (req, res) {
    console.log("postServico");
    console.log(req.body);
    const servico = prestadorService.postServico(req.body);
    setHeaderToResponse(res);
    res.send(servico);
});

module.exports = router;