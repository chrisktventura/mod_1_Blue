const prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do aluno: ")
let notA = prompt("Digite a nota A: ");
let notB = prompt("Digite a nota B: ");

media = ((notA*4) + (notB*6) / 10);

console.log(`A média do aluno: ${nome} é de ${media}`);