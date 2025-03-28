// Comentário em JS

/* Comentário em bloco */

// CTRL + ; - Atalho

// Declaração de variáveis no JS
// CONST x LET x VAR
// Por questões de segurança evitar o uso de VAR
// No Escopo global CONST não pode ser alterada

const nome = "Andrei"; // Uma constante precisa de um valor para ser iniciado
let Nome; // Permite iniciar a variável vazia

// const nome = "Pedro" -> Resulta em um erro
// let Nome -> Resulta em um erro

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga"; // Let permte alternar o valor

const message = "Hello world! Iniciando estudos com Javascript!";
console.log(message);

// Typeof ( Esse comando exibirá o tipo da variável )

const estado = "SP";
const idade = 18;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);

// O Javascript é uma linguagem de tipagem dinâmica e tipagem fraca.

///////////////////////////////////////////////////////////////////

// TIPOS DE FUNÇÕES NO JAVASCRIPT

function minhaFuncao() {}
console.log(typeof minhaFuncao);

// FUNÇÃO SIMPLES
function saudacao() {
  console.log("Olá, bem-vindo!");
}
saudacao();

// FUNÇÃO COM PARÂMETRO / ARGUMENTO
// Parâmetro -> É um dado que a função recebe.
// Argumento -> É o dado que é enviado para a função.

function Saudacao(nome) {
  // Parâmetro
  console.log("Olá, bem vindo " + nome); // Concatenando
  // Usando TEMPLATE STRING ``
  console.log(`Olá, bem-vindo ${nome}`);
  // ${} -> Placeholder
}

Saudacao("Andrei"); // Argumento

// FUNÇÃO COM MAIS DE UM PARÂMETRO
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois números for ${resultado}.`);
}

let n1 = 6;
let n2 = 10;

soma(n1, n2);

// FUNÇÃO COM RETORNO
function Soma(n1, n2) {
  return n1 + n2;
}

console.log(`A soma dos dois números foi ${Soma(2, 6)}.`);

// FUNÇÃO COM MAIS DE UM RETORNO
function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let num = 4;
console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

// FUNÇÃO ANÔNIMA
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`O dobro do número é ${dobro(15)}!`);

// ARROW FUNCTION COM PARÂMETRO ÚNICO
// FUNÇÃO FLECHA
const Dobro = (x) => {
  return x * 2;
};
console.log(`Função dobro com arrow function. Resultado ${Dobro(20)}!`);

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
console.log(`O resultado da operação é ${calc(6, "*", 6)}`);

// SIMPLIFICANDO ARROW FUNCTION
const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`);
console.log(`O resultado da operação é ${Calc(7, "*", 7)}`);

// IIFE - Immediately Invoked Function Expression
// Função Imediata - Última \o/
const iife = (function () {
  console.log("Estou sendo executado imediatamente...");
})();

// IIFE COM PARÂMETRO
const start = (function (app) {
  console.log(`Executando imediatamente o app ${app}.`);
})("Whatsapp");

// git add .
// git commit -m "@andreilna"
// git push