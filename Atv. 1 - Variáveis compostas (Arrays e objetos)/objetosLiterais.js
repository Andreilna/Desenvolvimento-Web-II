const assistente = {
  nome: "Andrei",
  idade: "19",
  cidade: "Registro",
  hobby: "Treinar",
  musicaPreferida: "Só rock 3",
};

for (const chave in assistente) {
  console.log(`${chave}: ${assistente[chave]}`);
}