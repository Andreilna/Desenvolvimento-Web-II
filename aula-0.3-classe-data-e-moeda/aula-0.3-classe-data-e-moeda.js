// CLASSES NO JAVASCRIPT
class Carro {
  // Nome de classes devem iniciar com a primeira letra maiúscula.
  // ATRIBUTOS
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

// Instânciar carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.buzinar()}`
);

// Adcionando um novo atribulo
carroEsportivo.corNeon = "Azul";

// Adcionando um novo método
carroEsportivo.turbo = function () {
  return "Vrummmm! O carro está acelerando!!!";
};

console.log(
  `O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${
    carroEsportivo.corNeon
  }. ${carroEsportivo.turbo()}`
);

/////////////////////////////////

// MANIPULANDO DATAS NO JAVASCRIPT
const dataAtual = new Date();
console.log(typeof dataAtual);

// Pegando o dia atual
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}.`);

// Pegando o mês atual
const mes = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mes}.`);

// Pegando o ano atual
const ano = dataAtual.getFullYear();
console.log(`Ano atual: ${ano}.`);

// ADCIONANDO DIAS, MÊSES, ANOS À DATA ATUAL
// Adcionar 10 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 10);

// Exibe a nova data:
console.log(`Daqui a 10 dias será dia ${dataAtual.getDate()}.`);

// Adcionar 3 meses à data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

// Exibe nova mês:
console.log(`Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}.`);

// Adcionar 2 anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

// Exibe o novo ano
console.log(`Daqui a 2 anos será ${dataAtual.getFullYear()}.`);

/////////////////////////////////
// TRABALHANDO COM MOEDAS NO JAVASCRIPT
let salario = 2500.3;
console.log(salario);
// Monstrando as casas decimais
console.log(salario.toFixed(2));
// Ocutando as casas decimais
console.log(salario.toFixed(0));
// Criando marcador de casa decimal
console.log(salario.toFixed(2).replace(".", ","));

// Formatação de moedas
// Mostrando o salário em REAL (R$)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

// Mostrando o salário em DÓLAR (USD)
console.log(salario.toLocaleString('en', {style: "currency", currency: "USD"}))

// CONVERTENDO DE REAL PARA DÓLAR
const salarioDolar = salario * 0.176

console.log(salarioDolar.toLocaleString('en', {style: "currency", currency: "USD"}))

// Mostrando o salário em EURO (EUR)
console.log(salario.toLocaleString('pt-br', {style: "currency", currency: "EUR"}))

/////////////////////////////////
// FORMATAÇÃO DE STRING
const nome = "Andrei Lucas"

// ALTERANANDO PARA LETRAS MAIÚSCULAS
console.log(nome.toUpperCase())

// ALTERNANDO PARA LETRAS MINÚSCULAS
console.log(nome.toLocaleLowerCase())

// CONTANDO CARACTERES DE UMA STRING
console.log(nome.length)

console.log(nome.length);
 
// REMOVENDO ESPAÇOS

const novoNome = nome.replace(/\s/g, "");
console.log(novoNome);
console.log(novoNome.length);