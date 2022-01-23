var prompt = require('prompt-sync')();

let valor = +prompt("Digite um valor em REAIS: ");
let moeda = +prompt("Digite um valor para MOEDA: ");
let dolar = valor * moeda;

console.log(`O valor em reais: R$ ${valor} é equivalente em dólares: US$ ${dolar}`);