const filmes = [
  {
    titulo: "Interestelar",
    genero: "Ficção Científica",
    ano: 2014,
    classificacao: "12+",
  },
  {
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    genero: "Fantasia",
    ano: 2001,
    classificacao: "14+",
  },
  {
    titulo: "Vingadores: Ultimato",
    genero: "Ação",
    ano: 2019,
    classificacao: "12+",
  },
  {
    titulo: "Corra!",
    genero: "Terror/Suspense",
    ano: 2017,
    classificacao: "16+",
  },
  {
    titulo: "A Origem",
    genero: "Ficção Científica",
    ano: 2010,
    classificacao: "14+",
  },
];

filmes.forEach((filme) => {
  console.log(
    `Título: ${filme.titulo}, Gênero: ${filme.genero}, Ano: ${filme.ano}, Classificação: ${filme.classificacao}`
  );
});
