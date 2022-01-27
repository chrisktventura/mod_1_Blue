var prompt = require('prompt-sync')();

// Escreva um programa que peça um número e escreva o fatorial dele.
// Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

const num = +prompt('Escreva um número: ');

let fat = 1

for (let i = 1; i <= num; i++) {
    fat = fat * i
}
console.log(`Fatorial de ${num}! = ${fat}`);
    

// exercicio corrigido

// let numero = +prompt("Digite um numero para descobrir seu fatorial ");

// for(let x = numero-1; x > 0 ; x--){
//     numero *= x;
// }
// console.log(numero);


    