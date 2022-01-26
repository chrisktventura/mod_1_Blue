var prompt = require('prompt-sync')();

const esc = +prompt("Digite a quantidade de alunos que deseja cadastrar: ");
let alunos = [];
let notas = [];
let media = 0;
let cont = 0;

while(cont < esc){
alunos.push(prompt(`${cont+1} - Digite o nome do aluno: `)); //
notas.push(+prompt(`${cont+1} - Digite a nota: `)); //
media += notas[cont];
cont++;
}

cont = 0;

while(cont < esc){
    console.log(`Aluno: ${alunos[cont]} - Nota: ${notas[cont]}`); // nome e nota do aluno
    cont++;
}
console.log(`Média geral das notas: ${(media/notas.length).toFixed(2)}`); // média geral 

 



