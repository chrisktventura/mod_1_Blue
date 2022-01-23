//Neste problema, deve-se ler o nome de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
//o nome de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
//Após, calcule e mostre o valor a ser pago.
var prompt = require('prompt-sync')();

let peca1 = prompt("Digite o nome da peça 1: ");
let numero_peca1 = +prompt("Digite o numero da peça 1: ");
let valor_peca1 = +prompt("Digite o valor da peça 1: ");

let peca2 = prompt("Digite o nome da peça 2. ");
let numero_peca2 = +prompt("Digite o numero da peça 2: ");
let valor_peca2 = +prompt("Digite o valor da peça 2: ");

valortotal_peca1 =  numero_peca1 * valor_peca1;
valortotal_peca2 =  numero_peca2 * valor_peca2;
valortotal = valortotal_peca1 + valortotal_peca2;

console.log(`A peça 1 ${peca1} tem a quantidade de ${numero_peca1} e o valor unitário de ${valor_peca1}, totalizando a compra em ${valortotal_peca1}`);
console.log(`A peça 2 ${peca2} tem a quantidade de ${numero_peca2} e o valor unitário de ${valor_peca2}, totalizando a compra em ${valortotal_peca2}`);
console.log(`O total da compra somando as duas peças é de: ${valortotal}`);
