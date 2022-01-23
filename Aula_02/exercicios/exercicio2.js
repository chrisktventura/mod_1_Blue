var prompt = require('prompt-sync')();

const nome = prompt("Digite seu nome completo: ");
const endereco = prompt("Digite seu endereço: ");
const cep = +prompt('Digite seu CEP: ');
const fone = +prompt('Digite o número de seu telefone: ')

console.log(`Nome: ${nome.toString()}. \nEndereço: ${endereco.toString()}. \nCEP: ${cep}. \nNúmero de telefone: ${fone}.`)