const mysql = require("mysql2");

const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || 3306;
const user = process.env.DB_USER || "root";
const password = process.env.DB_PASSWORD || "root";
const database = process.env.DB_NAME || "forum";

const connection = mysql.createConnection({
    host,
    port,
    user,
    password,
    database,
    multipleStatements: true,
});

connection.connect((error) => {
    if (error) throw new Error(`Erro ao conectar: ${error.message}`);

    console.log("Database connected!");
});

module.exports = connection;
