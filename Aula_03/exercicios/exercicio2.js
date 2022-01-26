var prompt = require('prompt-sync')();

let nome = prompt('Digite o nome do aluno: ');
let nota1 = +prompt('Digite a primeira nota: ');
let nota2 = +prompt('Digite a segunda nota: ');
let nota3 = +prompt('Digite a terceira nota: ');
let nota4 = +prompt('Digite a quarta nota: ');

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7){
    console.log(`O aluno ${nome} com a média de ${media} foi APROVADO! `);
}else if (media > 5 || media < 6){
    console.log(`O aluno ${nome} com a média de ${media} está em RECUPERAÇÃO! `);
}else (media < 5) 
    console.log(`O aluno ${nome} com a média de ${media} foi REPROVADO! `);
