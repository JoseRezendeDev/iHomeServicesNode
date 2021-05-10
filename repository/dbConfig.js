async function connect(){
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://jose:jose123@localhost:3306/ihomeservices").
    catch(console.log("não conectou"));
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = connect();