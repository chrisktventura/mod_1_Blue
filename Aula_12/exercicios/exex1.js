var prompt = require("prompt-sync")();

function area(larg, comp){
  let area = larg * comp;
  console.log(`A área de um terreno ${larg} x ${comp} é de ${area}m²`);

}
let largura = +prompt('Digite a largura do terreno: ');
let comprimento = +prompt('digite o comprimento do terreno: ');

let terreno = area(largura, comprimento);

