function converterSalario(salarioEmReal) {
  const taxaDolar = 0.176;
  const taxaEuro = 0.16;

  const salarioEmDolar = salarioEmReal * taxaDolar;
  const salarioEmEuro = salarioEmReal * taxaEuro;

  const salarioEmDolarFormatado = salarioEmDolar.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  const salarioEmEuroFormatado = salarioEmEuro.toLocaleString("de", {
    style: "currency",
    currency: "EUR",
  });

  return {
    dolar: salarioEmDolarFormatado,
    euro: salarioEmEuroFormatado,
  };
}

const salarioReal = 2000;
const { dolar, euro } = converterSalario(salarioReal);
console.log(`Salário em Dólar: ${dolar}`);
console.log(`Salário em Euro: ${euro}`);