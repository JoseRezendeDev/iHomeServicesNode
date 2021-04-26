const express = require('express');
const app = express();
const port = 80;
var i18n = require('i18n');
const router = require('router');

i18n.configure({
    defaultLocale: "pt",
    locales: ["pt", "en"],
    extension: ".json",
    directory: __dirname + "/locais",
    cookie: "aula5"
});

app.use(i18n.init);

app.listen(port, () => {
    console.log("iHomeServices running on port ", port);
});

module.exports = app;