var express = require('express');
var router = express.Router();
const clienteService = require('../service/clienteService');

router.get('/', (req, res) => {
    console.log("getClientes chamado");
    const clientes = clienteService.getClientes();
    res.send(clientes);
})

router.get('/:id', (req, res) => {
    console.log("getClienteById chamado");
    const cliente = clienteService.getClienteById(req.params.id);
    res.send(cliente);
})

module.exports = router;