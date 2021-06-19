var express = require('express');
var router = express.Router();
const categoriaService = require('../service/categoriaService');

router.get('/', async function(req, res) {
    console.log("getCategorias");
    const categorias = await categoriaService.getCategorias();
    res.set({
        "Content-Type": "application/txt",
        "Access-Control-Allow-Origin": "*",
    })
    res.send(categorias);
})

module.exports = router;