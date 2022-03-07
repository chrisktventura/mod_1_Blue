// Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.

// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.

// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.


var prompt = require('prompt-sync')();

let saque = parseInt(prompt(`Min: R$ 10 
Max: R$ 600
Insira o Valor de Saque: R$ `));

while(saque < 10 || saque > 600){
    saque = parseInt(prompt('Valor não permitido. Min: R$ 10 Max: R$ 600'));
}
let notasDisp = [100, 50, 10, 5, 1];
let notasSaque = [];
let div;
let mod;

for (let i = 0; i < notasDisp.length; i++) {
    div = Math.floor(saque / notasDisp[i]);
    mod = saque % notasDisp[i];
    if(mod != 0){
        saque = mod;
    }else{
        saque = 0;
    }
    notasDisp[i] = div;
}
console.log(`\nNotas Entregues:\n`);
for (let i = 5; i >= 0; i--) {
    console.log(`\tR$${notasDisp[i]} \t${notasSaque[i]}`);
}


// let saque = parseInt(prompt("Valor do saque (min R$10, max R$600): R$"));

// while (saque < 10 || saque > 1000) {
//     saque = parseInt(prompt("Valor não permitido. Selecione um valor ente R$10 e R$1000: R$"));
// }

// let cedulasDisponiveis = [200,100,50,20,10,5,1];
// let cedulasEntregues = []

// let div;
// let mod;

// for (i = 0; i < cedulasDisponiveis.length; i++) {
//     div = Math.floor(saque / cedulasDisponiveis[i]);
//     mod = saque % cedulasDisponiveis[i];
//     if (mod != 0) {
//         saque = mod;
//     } else {
//         saque = 0;
//     }
//     cedulasEntregues[i] = div;
// }
// console.log(`\nCédulas Fornecidas:\n`);
// for (i = 5; i >=0; i--) {
//     console.log(`\tR$${cedulasDisponiveis[i]} \t${cedulasEntregues[i]}`)
// }