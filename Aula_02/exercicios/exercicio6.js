var prompt = require('prompt-sync')();

let life = +prompt("Digite a quantidade de vida do Boss entre 10 e 50: ");
let dano = +prompt("Digite o valor do Dano de ATK entre 5 e 10: ");
turno = (life/dano);

console.log(`O Boss será derrotado em ${turno.toFixed(0)} turnos.`);

