var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('Bem vindo ao iHomeServices');
});

router.use("/cliente", require('./controller/clienteController'));
router.use("/prestador", require('./controller/prestadorController'));
router.use("/categoria", require('./controller/categoriaController'));

module.exports = router;