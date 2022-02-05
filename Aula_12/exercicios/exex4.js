// Criar uma função que junte dois arrays e retorno o resultado como um novo array

var prompt = require("prompt-sync")();

function juntararrays(ar1, ar2) {
  const array = [];

  for (let elemento of ar1) {
    array.push(elemento);
  }
  for (let elemento of ar2) {
    array.push(elemento);
  }
  return array;
}

const arrayN1 = [1, 2, 3];
const arrayN2 = [4, 5, 6];
const arrayjunto = juntararrays(arrayN1, arrayN2);

console.log(arrayjunto);
