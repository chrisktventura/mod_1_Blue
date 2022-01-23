var prompt = require('prompt-sync')();

const ref = 42.54;
const taxa = 0.10;

const garcon = (ref * taxa);

console.log(`E os 10% do garçom? R$${garcon.toFixed(2)}`)