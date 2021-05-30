console.clear(); // limpa o console

import express from "express"; // importa express da biblioteca express
import { mongoose } from "./config/database"; // importa mongoose do arquivo informado

const app = express(); // cria a aplicação apartir do express e atribui a constante app
const db = mongoose; // atribui o mongoose a constante db

app.listen(1234, () => {   // roda a aplicação na porta definida, no caso 1234
    console.log("O servidor está rodando...");
});