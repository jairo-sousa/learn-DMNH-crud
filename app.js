"use strict";

const express = require("express");
const app = express();

const PORT = process.env.PORT | 3000;

app.listen(PORT, (error) => {
    if (error) throw new Error("Problema ao iniciar serviço", error);

    console.log(`Serviço iniciado: http://localhost:${PORT}`);
});
