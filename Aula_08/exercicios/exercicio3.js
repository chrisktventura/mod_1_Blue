var prompt = require('prompt-sync')();

// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

var num = +prompt(`Digite um número para exibir a tabuada: `)

for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

