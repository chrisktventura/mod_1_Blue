var prompt = require('prompt-sync')();

const num1 = +prompt('Digite um número: ');
const num2 = +prompt('Digite outro número: ');

if (num1 > num2){
    console.log('O número 1 é maior');
} else if (num1 < num2){
    console.log('O número 2 é maior');
} else {
    console.log('Os dois números são iguais.');
}