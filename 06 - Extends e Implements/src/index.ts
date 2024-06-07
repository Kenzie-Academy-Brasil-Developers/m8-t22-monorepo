import {
  IInstrumento,
  IInstrumentoDeCorda,
  IInstrumentoDeSopro,
} from "./interfaces/instrument.interfaces";

class Instrumento implements IInstrumento {
  tipo: string;
  marca: string;
  ano: number;

  constructor(tipo: string, marca: string, ano: number) {
    this.tipo = tipo;
    this.marca = marca;
    this.ano = ano;
  }

  tocar() {
    return `Tocando ${this.tipo} feito pela ${this.marca} em ${this.ano}`;
  }

  afinar() {
    return `Afinando o ${this.tipo}`;
  }
}

class InstrumentoDeCorda extends Instrumento implements IInstrumentoDeCorda {
  numeroDeCordas: number;
  materialDaCorda: string;

  constructor(
    tipo: string,
    marca: string,
    ano: number,
    numeroDeCordas: number,
    materialDaCorda: string
  ) {
    super(tipo, marca, ano);
    this.numeroDeCordas = numeroDeCordas;
    this.materialDaCorda = materialDaCorda;
  }

  dedilharCorda(numeroDaCorda: number) {
    if (numeroDaCorda > 0 && numeroDaCorda <= this.numeroDeCordas) {
      return `Dedilhando a corda numero ${numeroDaCorda} no ${this.tipo}`;
    }

    return `Numero da corda invalido. Este ${this.tipo} tem ${this.numeroDeCordas} cordas.`;
  }

  // Sobrescrita de método (overwrite)
  afinar() {
    return `Afinando o ${this.tipo} com ${this.numeroDeCordas} cordas de ${this.materialDaCorda}`;
  }
}

class InstrumentoDeSopro extends Instrumento implements IInstrumentoDeSopro {
  tipoDeChave: string;
  material: string;

  constructor(
    tipo: string,
    marca: string,
    ano: number,
    tipoDeChave: string,
    material: string
  ) {
    super(tipo, marca, ano);
    this.tipoDeChave = tipoDeChave;
    this.material = material;
  }

  soprar(): string {
    return `Soprando o ${this.tipo} feito de ${this.material} com chaves ${this.tipoDeChave}`;
  }

  limpar(): string {
    return `Limpando o ${this.tipo}`;
  }
}

console.log("");

// Instrumento
const instrumento = new Instrumento("Teclado", "Yamaha", 2023);
// console.log(instrumento);
// console.log(instrumento.tocar());

// Instrumento de corda
const violino = new InstrumentoDeCorda(
  "Violino",
  "Stradivarius",
  1713,
  4,
  "tripas"
);
// console.log(violino.tocar());
// console.log(violino.afinar());
// console.log(violino.dedilharCorda(0));
// console.log(violino.dedilharCorda(1));

// Instrumento de sopro 1
const saxofone = new InstrumentoDeSopro(
  "Saxofone",
  "Selmer",
  2021,
  "abertas",
  "latão"
);
console.log(saxofone.tocar());
console.log(saxofone.afinar());
console.log(saxofone.soprar());
console.log(saxofone.limpar());

console.log("");

// Instrumento de sopro 2
const trompete = new InstrumentoDeSopro(
  "Trompete",
  "Bach",
  2020,
  "aberta",
  "latão"
);
console.log(trompete.tocar());
console.log(trompete.afinar());
console.log(trompete.soprar());
console.log(trompete.limpar());

console.log("");
