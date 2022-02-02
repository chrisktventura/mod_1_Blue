// Aula - 11 -Exercicio de fixação - 3

// Escreva uma função para conversão de temperatura.
// Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K'
// indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin.
// A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.

var prompt = require("prompt-sync")();
const temp = +prompt("qual temperatura ");
const tipo = prompt;
convertTemp(temp, "C");

function convertTemp(num, tipo) {
  let fahrenheit;
  let kelvin;
  let celcius;
  if (tipo == "C") {
    celcius = num;
    kelvin = num + 273.15;
    fahrenheit = num * 1.8 + 32;
  } else if (tipo == "K") {
    kelvin = num;
    celsius = num - 273.15;
    fahrenheit = num - 273.15 * 1.8 + 32;
  } else if (tipo == "F") {
    fahrenheit = num;
    celcius = (num - 32) / 1.8;
    kelvin = celcius + 273.15;
  } else {
    console.log("tipo errado");
  }

  console.log(`temperatura em Celcius: ${celcius} ºC`);
  console.log(`temperatura em Kelvin: ${kelvin} K`);
  console.log(`temperatura em Fahrenheit: ${fahrenheit} ºF`);

  let retorno = prompt(
    "qual temperatura deseja retornar? (ex: F, K ou C"
  ).toUpperCase();
}
