// function sum(a: number, b: number) {
//   return a + b;
// }
// console.log(sum(1, 2));
// console.log("Sou um arquivo TypeScript!!!");

import { IPet, IPerson } from "./interfaces";

const pet: IPet = {
  id: 1,
  name: "Minerva",
  species: "Cachorro",
};

// console.log(pet);

const person1: IPerson = {
  firstName: "Chrystian",
  id: 1,
  age: 31,
  pet: { id: 2, name: "Louro", species: "Papagaio" },
};

const person2: IPerson = {
  firstName: "Pedro",
  id: 2,
  age: 28,
  pet: pet,
};

// console.log(person1);

function printPersonData(person: IPerson): void {
  console.log(`Meu nome é ${person.firstName}`);
  console.log(`Eu tenho ${person.age} anos`);
}

// printPersonData(person1);

function getPerson(): IPerson {
  return person2;
}

console.log(getPerson());
