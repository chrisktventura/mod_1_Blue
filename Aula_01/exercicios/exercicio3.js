//Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
//Calcule e exiba o total de dias que essa pessoa já viveu. 
//Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
var prompt = require('prompt-sync')();

let idade_anos = +prompt("Digite Sua Idade: ");
let idade_meses = +prompt("Digite quantos meses:");
let idade_dias = +prompt("Digite quantos dias:");
let total_dias = 0;

// Converte anos em Dias
total_dias = total_dias + (idade_anos*365);

// Converte meses em dias
total_dias = total_dias + (idade_meses*30) ;

// Converte anos em Dias na tela
total_dias = total_dias + idade_dias;

//Idade = (dias+(anos*365)+(meses*30));

console.log(`O total de dias é  ${total_dias}`);