// Importando o pacote do Express.js
const express = require("express");

// Carregando o método pricipal do Express
const app = express(); // Iniciando o express

// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");

<<<<<<< HEAD
// CONFIGURANDO A PASTA PUBLIC PARA ARQUIVOS ESTÁTICOS
app.use(express.static('public'));
=======
// Configurando a pasta public para arquivos estáticos
app.use(express.static('public'))
>>>>>>> 987814d (@Andreilna)

// Criando a rota principal (raiz) do site
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisão
// RES -> Trata a resposta

// Rota do index
app.get("/", (req, res) => {
  res.render("index");
});

// Rota de perfil
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

// Rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  // Coletando o parâmetro da rota
  const produto = req.params.produto;

  // Array com lista de produtos
  const produtos = ["Computador", " Celular", " Tablet", " Notebook"];

  res.render("produtos", {
    // Enviando a variável produto para a página
    produto: produto,
    produtos: produtos,
  });
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
