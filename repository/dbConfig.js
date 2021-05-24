const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "localhost",
    database: "ihomeservices",
    user: "root",
    password: "jose123"
});

// conn.connect(function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log("conectou");
// });

// const connect = async () => {
//     const mysql = require("mysql2/promise");
//     const connection = await mysql
//     .createConnection("mysql://root:jose123@localhost:3306/ihomeservices")
//     .then(() => console.log("conectou"))
//     .catch(e => {
//         console.log("não conectou");
//         console.log(e);
//     });
//     global.connection = connection;
//     return connection;
// };

module.exports = conn;