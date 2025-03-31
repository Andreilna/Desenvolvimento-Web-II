function formatarNome(nome) {
  const nomeMaiusculas = nome.toUpperCase();
  const nomeMinusculas = nome.toLowerCase();

  const numeroDeLetras = nome.length;

  console.log(`Nome em maiúsculas: ${nomeMaiusculas}`);
  console.log(`Nome em minúsculas: ${nomeMinusculas}`);
  console.log(`Número de letras: ${numeroDeLetras}`);
}

formatarNome("Andrei Lucas Neves de Araujo");