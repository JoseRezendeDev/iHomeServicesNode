var express = require('express');
var router = express.Router();
const clienteService = require('../service/clienteService');

router.get('/', async function(req, res) {
    console.log("getClientes");
    const clientes = await clienteService.getClientes();
    res.send(clientes);
})

router.get('/:id', async function(req, res) {
    console.log("getClienteById chamado");
    const cliente = await clienteService.getClienteById(req.params.id);
    res.send(cliente);
})

module.exports = router;