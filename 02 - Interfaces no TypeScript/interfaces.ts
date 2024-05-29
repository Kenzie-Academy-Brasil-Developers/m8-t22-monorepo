/*
  Interfaces
  - Estrutura que define o formato de um objeto
  - A ordem das chaves não importa, desde de que todas as chaves
   e tipos dos valores sejam respeitados
  - Intefaces podem ser exportadas e importadas
*/

export interface IPet {
  id: number;
  name: string;
  species: string;
}

export interface IPerson {
  id: number;
  firstName: string;
  lastName?: string;
  age: number;
  pet: IPet;
}

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
}
