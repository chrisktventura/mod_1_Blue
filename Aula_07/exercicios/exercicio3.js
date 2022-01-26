var prompt = require('prompt-sync')();

const num = [];
let cont = 0;

while(cont < 20){
    num.push(+prompt(`${cont+1} - Digite um números de 0 a 100: `));
   
cont++;
}

console.log(num.sort());