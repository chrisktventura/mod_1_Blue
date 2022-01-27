var prompt = require('prompt-sync')();
const nome = +prompt(`Digite seu nome para percorrer a história da boate azul:`);
let sim = 0;
let nao = 0;
let cont = 0;

const histInicio = `Doente de amor, ${nome} foi em busca de um remédio na vida noturna,
como uma flor da noite em uma bote ali da zona sul...`;
const q1 = `A dor do amor é com outro amor que a gente cura? Responda sim ou não: `;

const hist2 = `${nome}, ira tentar curar a dor deste amor na boate azul... \nE quando a noite vai se agonizando no clarão da aurora... \nOs integrantes da vida noturna se foram dormir...`;
const q2 = `${nome}, você deseja continuar a noite na boate ? Responda sim ou não: `;

const hist3 = `E a dama da noite estava comigo também foi embora... \nFecharam-se as portas sozinho tive que sair. \nSair de que jeito? se nem sei o rumo para onde vou.`;
const q3 = `${nome}, você deseja sair da boate? Responda sim ou não: `;

const hist4 = `Muito vagamente me lembro onde estou, em uma boate aqui na zona sul...`; //
const q4 = `${nome}, você consegue lembrar por que veio a boate? Responda sim ou não: `; // 

const hist5 = "";
const q5 = "";

const resultado0s = `${nome}, você continua doente de amor e não procurou remédio na vida noturna!`;
const resultado1e2s = `${nome}, você até tentou procu`;
const resultado3s = `${nome}, você`;
const resultado4s = `${nome}, você `;
const resultado5s = `${nome}, você `;

let contador = 0; //contador precisa ser sobrescrito, ou seja, tem que ser um let, pois const é CONSTANTE um valor que não pode ser alterado


console.log("Chris");
//ira incrementar o contador com + 1
contador++;
console.log(q1)
console.log(q2)





let resposta = prompt("Digite sim ou não: ")
while (resposta != 'sim' && resposta != 'nao') {
    resposta = prompt("Digite sim ou não: ")

}
console.log(historia[i])
if (resposta == 'sim') {
    sim += 1
} else {
    nao += 1
}
}
if (sim === 0) {
    console.log(resultado0s)
}
if (sim === 1) {
    console.log(resultado1e2s)
}
if (sim === 2) {
    console.log(resultado3s)
}
if (sim === 3) {
    console.log(resultado4s)
}
if (sim === 4) {
    console.log(resultado5s)
}