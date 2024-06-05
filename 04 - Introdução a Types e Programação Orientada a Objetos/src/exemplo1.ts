/*
  Programação Orientada a Objeto (POO , OOP)
*/

// const firstName = "Chrystian";

// function sayHello() {
//   console.log(firstName);
// }

// sayHello();

// PascalCase
// Uma fábrica de objetos
class Person {
  // firstName: string = "Chrystian";
  // age: number = 31;

  firstName: string;
  age: number;

  // Construtor - Invocado com o new Person
  constructor(primeiroNome: string, idade: number) {
    this.firstName = primeiroNome;
    this.age = idade;
  }

  sayHello() {
    console.log(`Olá, meu nome é ${this.firstName}`);
  }
}

// Instanciar um objeto de uma classe
const personA = new Person("Pedro", 28);
console.log(personA.firstName);
console.log(personA.age);
personA.sayHello();

const personB = new Person("Bruna", 26);
console.log(personB.firstName);
console.log(personB.age);
personB.sayHello();
