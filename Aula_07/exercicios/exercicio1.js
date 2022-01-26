var prompt = require('prompt-sync')();

let cont = 0;
const numeros = [];
const pares = [];
const impares = [];

while(cont < 10){
    numeros.push(+prompt(`${cont+1} - Digite um número inteiro: `));
    if(numeros[cont]%2 === 0){
        pares.push(numeros[cont]);
}   else{
        impares.push(numeros[cont]);
}
cont++;
}

console.log(`Números inseridos: ${numeros}`);
console.log(`Números pares: ${pares}`);
console.log(`Números Impares: ${impares}`);

