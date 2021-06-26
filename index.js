const express = require('express');
const app = express();
const port = 80;
var i18n = require('i18n');
const db = require('./repository/dbConfig');


i18n.configure({
    defaultLocale: "pt",
    locales: ["pt", "en"],
    extension: ".json",
    directory: __dirname + "/locais",
    cookie: "aula5"
});

app.use(i18n.init);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./router"));

app.listen(port, () => {
    console.log("iHomeServices running on port ", port);
});

module.exports = app;