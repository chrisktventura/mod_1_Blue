var prompt = require('prompt-sync')();

// Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.


const carros = ['Fusca', 'Peugeot', 'Jeep', 'S10', 'Mitsubishi'];
const consumo = [7.0, 13.5, 6.0, 8.5, 6.5];
const preco = 5.5;
const consumo1000 = [];
const custo = [];
const gasolina = 5.5;

let economico = 0;
let carroEco = "";

for(const carroConsumo of consumo){
    if(carroConsumo > economico){
        economico = carroConsumo;
    }
    consumo1000.push((1000 / carroConsumo) * preco)
    custo.push((1000 / carroConsumo)*gasolina);
}
carroEco = carros[consumo.indexOf(economico)];

for(let x=0; x<carros.length; x++){
    console.log(`Carro: ${carros[x]}, Consumo em litros/1000: ${consumo1000[x].toFixed(2)}, Custo: ${custo[x].toFixed(2)}`);
}

console.log(`Carro mais economico ${carroEco}, consumo: ${economico}km/L`);



