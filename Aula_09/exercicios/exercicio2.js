var prompt = require('prompt-sync')();

// Aula 09 - Exercicio 2
// Passo 1 - Leia um valor inteiro X. 
// Passo 2 - Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso. Use o laço FOR.

let x = +prompt("Digite um número para X: ");
let numerosI = ('Números Impares de 1 à X:');

for (let i = 1; i < x; i+=2) {
    
    console.log(numerosI, i);
}
    console.log("Número atribuido à X:",x);