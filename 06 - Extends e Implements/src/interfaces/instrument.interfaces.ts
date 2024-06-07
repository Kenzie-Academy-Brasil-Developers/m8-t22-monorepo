export interface IInstrumento {
  tipo: string;
  marca: string;
  ano: number;

  tocar(): string;
  afinar(): string;
}

export interface IInstrumentoDeCorda extends IInstrumento {
  numeroDeCordas: number;
  materialDaCorda: string;

  dedilharCorda(numeroDaCorda: number): string;
}

export interface IInstrumentoDeSopro extends IInstrumento {
  tipoDeChave: string;
  material: string;

  soprar(): string;
  limpar(): string;
}
