var prompt = require('prompt-sync')();

// Aula 09 - Exercicio 4
// Numa eleição existem três candidatos. 
// Faça um programa que peça o número total de eleitores. 
// Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

let candidatos = ["candidato1", "candidato2", "candidato3"];
let totalEleitores = +prompt("Digite a quantidade de eleitores: ");
let votos = 0;

