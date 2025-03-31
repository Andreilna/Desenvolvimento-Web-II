const exibirDataFutura = () => {
  let dataAtual = new Date();

  let dia = dataAtual.getDate() + 3;
  let mes = dataAtual.getMonth() + 1 + 2;
  let ano = dataAtual.getFullYear() + 1;

  if (dia > 31) {
    mes = mes + 1;
    dia = dia - 31;
  }

  if (mes > 12) {
    mes = mes - 12;
    ano = ano + 1;
  }

  dia = String(dia).padStart(2, '0');
  mes = String(mes).padStart(2, '0');

  console.log(`${dia}/${mes}/${ano}`);
};

exibirDataFutura();