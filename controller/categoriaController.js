var express = require('express');
var router = express.Router();
const categoriaService = require('../service/categoriaService');
const { setHeaderToResponse } = require('./controllerUtils');

router.get('/', async function(req, res) {
    console.log("getCategorias");
    const categorias = await categoriaService.getCategorias();
    setHeaderToResponse(res);
    res.send(categorias);
})

module.exports = router;