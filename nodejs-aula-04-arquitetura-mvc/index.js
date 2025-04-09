// Importando o pacote do Express.js

// Modo CommonJS de importação
// const express = require("express");

// Modo ES6 de importação
import express from "express";

// Carregando o método pricipal do Express
const app = express(); // Iniciando o express

// Importando os Controllers (onde estão as rotas)
import ProdutosController from "./controllers/ProdutosController.js";

// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");

// Configurando a pasta public para arquivos estáticos
app.use(express.static("public"));

// Configurando o Express para utilizar as rotas dos Controllers
app.use("/", ProdutosController)

// Criando a rota principal (raiz) do site
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisão
// RES -> Trata a resposta

// Rota do index
app.get("/", (req, res) => {
  res.render("index");
});

// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor

app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});

///////////

// npm init -y
// npm install [biblioteca]
// node index.js
// npm start
