// ARRAYS ( Vetor ou Lista )

let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log(`1 - ${Produtos[0]}`);
console.log(`2 - ${Produtos[1]}`);
console.log(`3 - ${Produtos[2]}`);
console.log(`4 - ${Produtos[3]}`);

console.log("Exibindo a lista através do FOR...");
for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo lista através do forEach...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo lista através do forEach com os índices...");
Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

// MÉTODOS DE MANIPULAÇÃO DE VETORES
let vetor = ["Laranja", "Maça", "Banana"];
console.log(`Nosso vetor é o: ${vetor}`);
vetor[3] = "Morango";
console.log(`Nosso vetor agora é o: ${vetor}`);

// MÉTODO PUSH - Insere um novo elemento no FINAL do vetor
vetor.push("Abacaxi");
console.log(`Nosso vetor agora é o: ${vetor}`);

// MÉTODO UNSHIFT - Insere novo elemento no INÍCIO do vetor
vetor[0] = "Pera";
console.log(`Nosso vetor agora é o: ${vetor}`);
vetor.unshift("Laranja");
console.log(`Nosso vetor agora é o: ${vetor}`);

// MÉTODO LENGTH - Retorna o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3, 800, 200];
console.log(`Nossa lista de números é: ${numeros}`);
console.log(`O número de elementos do vetor é ${numeros.length}.`);

// MÉTODO SORT - Ordenar o vetor
console.log(`O primeiro elementos da lista de frutas é: ${vetor[0]}.`);
vetor.sort();
console.log(`Agora o primeiro elemento da lista de frutas é: ${vetor[0]}.`);
console.log(`Nossa lista de frutas ordenadas é: ${vetor.sort()}`);

// Ordenação de números com SORT
console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de números ordenada é: ${numeros}`);

// Ordenando de forma CRESCENTE
console.log(numeros.sort((a, b) => a - b));

// Ordenando de forma DECRESCENTE
console.log(numeros.sort((a, b) => b - a));

////////////////////////////////////////////////////////////////////////////

// OBJETOS LITERAIS ( não são derivados de classes )
// Objetos possuem Atributos e Métodos
// Lado esquerdo: chaves / Lado direito: valores
const pessoa = {};
console.log(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freando...");
  },
};
console.log(`O modelo do carro é ${carro.modelo}.`);
console.log(`A cor do carro é ${carro.cor}.`);
carro.acelerar();
carro.frear();

////////////////////////////////////////////////////////////////////////////

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho,",
};
console.log(produto);
console.log(
  `O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}. ${produto.descricao}`
);

////////////////////////////////////////////////////////////////////////////

// ARRAY DE OBJETOS

const productList = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "Ótima velocidade de processamento",
  },

  // Produto 2
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento",
  },

  // Produto 3

  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ótima velocidade de processamento",
  },
];

console.log();

// Exibindo o ARRAY DE OBJETOS com forEach:

productList.forEach((produto) => {
  console.log(`Produto: ${produto.nome}`);
  console.log(`Marca: ${produto.marca}`);
  console.log(`Preço: ${produto.preco}`);
  console.log(`Descrição: ${produto.descricao}`);
});

// console.table

console.table(productList);