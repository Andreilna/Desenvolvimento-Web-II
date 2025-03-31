class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  correr() {
    return `${this.nome} está correndo.`;
  }

  andar() {
    return `${this.nome} está andando.`;
  }

  atacar() {
    return `${this.nome} está atacando.`;
  }

  defender() {
    return `${this.nome} está se defendendo.`;
  }
}

class HomemAranha extends Heroi {
  constructor(nome, vida, velocidade, forca, teia) {
    super(nome, vida, velocidade, forca);
    this.teia = teia;
  }

  sentidoAranha() {
    return `${this.nome} detectou perigo com seu sentido aranha!`;
  }

  soltarTeia() {
    if (this.teia) {
      return `${this.nome} está soltando teia!`;
    } else {
      return `${this.nome} não pode soltar teia.`;
    }
  }
}

class Superman extends Heroi {
  constructor(nome, vida, velocidade, forca, podeVoar) {
    super(nome, vida, velocidade, forca);
    this.podeVoar = podeVoar;
  }

  visaoCalor() {
    return `${this.nome} está usando sua visão de calor!`;
  }
}

class Batman extends Heroi {
  constructor(nome, vida, velocidade, forca, esconder) {
    super(nome, vida, velocidade, forca);
    this.esconder = esconder;
  }

  investigar() {
    return `${this.nome} está investigando um crime.`;
  }
}

const homemAranha = new HomemAranha("Homem-Aranha");
const superman = new Superman("Superman");
const batman = new Batman("Batman");

console.log(homemAranha.correr());
console.log(homemAranha.sentidoAranha());
console.log(homemAranha.soltarTeia());

console.log(superman.atacar());
console.log(superman.visaoCalor());

console.log(batman.defender());
console.log(batman.investigar());