const prompt = require('prompt-sync')();

let idades = [];
let alturas = [];
let cont = 0;
media = 0;
media1 = 0;

while (cont < 5){
    idades.push(+prompt(`${cont+1} - Digite sua idade: `));
    alturas.push(+prompt(`${cont+1} - Digite sua altura: `));
    media += idades[cont];
    media1 += alturas[cont];
    cont++;

}    

media = media1/idades.length;
console.log(`Média de idade: ${parseInt(media)} anos!`);

media1 = media1/alturas.length;
console.log(`Média de algura: ${parseFloat(media1)} metros!`);