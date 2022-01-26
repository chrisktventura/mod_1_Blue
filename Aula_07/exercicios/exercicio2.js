var prompt = require('prompt-sync')();

const notaQuant = [];
const notas = [];

while(cont == 0){
    notasQuant.push(+prompt(`Digite a quantidade de notas que deseja inserir: `))
   
} if(notas >=7){
    console.log(`APROVADOS: ${notas}`);
} else if(notas > 5 && notas < 7){
    console.log(`RECUPERAÇÃO ${notas}`);
} else {
    console.log(`REPROVADOS`);
}
