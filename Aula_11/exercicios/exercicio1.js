// Aula - 11 - Exercicio de fixação - 1

// Faça um programa, com uma função que necessite de três argumentos:
// dois números e um sinal de operador matemático (+, -, * ou /).
// Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

var prompt = require("prompt-sync")();

const num1 = +prompt("digite o 1º numero: ");
const num2 = +prompt("digite o 2º numero: ");
const operador = prompt("digite a operação: ");

console.log(operacao(num1, num2, operador));

function operacao(n1, n2, op) {
  if (op == "+") {
    return n1 + n2;
  } else if (op == "-") {
    return n1 - n2;
  } else if (op == "*") {
    return n1 * n2;
  } else if (op == "/") {
    return n1 / n2;
  }
}
