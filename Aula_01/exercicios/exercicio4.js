//Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos,
// meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias

var prompt = require('prompt-sync')();

total_dias = +prompt("Digite Sua Idade em dias: ");

idade_anos = total_dias/365;
resto_dia_pos_ano = total_dias%365;
idade_meses = resto_dia_pos_ano/30;
idade_dias = resto_dia_pos_ano%30;

console.log(`Sua idade em anos é ${idade_anos.toFixed(0)}, sua idade em meses é ${idade_meses.toFixed(0)} e em dias ${idade_dias}`);

