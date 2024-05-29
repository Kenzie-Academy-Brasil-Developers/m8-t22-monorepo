// Fluxo de dados
// Qual tipo de dado essa variável deve armazenar
// Quais tipos de dado eu estou passando como parâmetro
// Quais tipos de dado uma função está retornando

// Tipos primitivos:
// Dados primitivos no Javascript
// String, Number, Boolean, Null, Undefined

// string, number, boolean, null, undefined

let firstName: string = "Alex";
let age: number = 33;
let isTeacher: boolean = true;

function sayMyName(name: string) {
  console.log(name);
}

sayMyName(firstName);

function getMyName(name: string): string {
  return name;
}
