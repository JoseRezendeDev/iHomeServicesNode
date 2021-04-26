const app = require('index.js');

app.get('/clientes', (req, res) => {
    res.send("Lista de todos os clientes");
})