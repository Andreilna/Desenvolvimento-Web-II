// Importando o pacote do Express.js
const express = require("express");

// Carregando o método pricipal do Express
const app = express(); // Iniciando o express

// CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine', 'ejs');

// Criando a rota principal (raiz) do site
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisão
// RES -> Trata a resposta
app.get("/", (req, res) => {
  res.send(
    "<h1>Bem-vindo ao meu primeiro site em Node.js</h1><br><p>Iniciando estudos com Node.js</p>"
  );
});

// Rota de perfil
// :nome -> parâmetro obrigatório
// :nome? -> parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  // res.send("<h1>Perfil do usuário!</h1>");
  // Coletando o parâmetro da rota e gravando na variável
  const nome = req.params.nome;

  if (nome) {
    res.send(`<h2>Olá, ${nome}, seja bem-vindo ao seu perfil!</h2>`);
  } else {
    res.send("<h2>Faça login para acessar seu perfil</h2>");
  }
});

// Rota de produtos
app.get("/produtos", (req,res) => {
    res.render("produtos")
})

// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor

app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
