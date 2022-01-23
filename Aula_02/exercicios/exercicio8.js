var prompt = require('prompt-sync')();

const compra = 100.98;
const pagt = 150;
const troco = pagt - compra ;

console.log(`O seu troco é de: R$${troco.toFixed(2)}`);
