"use strict";

const express = require("express");
const app = express();

const router = require("./routers");
router(app);

const connection = require("./database/conection");
const database = require("./database/database");
database.init(connection);

const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, (error) => {
    if (error) throw new Error(`Problema ao iniciar serviço: ${error.message}`);

    console.log(`Serviço iniciado: http://${HOST}:${PORT}`);
});
