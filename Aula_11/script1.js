var prompt = require("prompt-sync")();

// function saudacao(){
//     console.log('Seja bem vindo(a) Bluemer!');
//     console.log('Essa é a aula 11 do nosso curso.');
//     console.log();
// }
// saudacao();

// function saudacao(){
//     let nome = prompt('Qual o seu nome? ');
//     let idade = prompt('Qual a sua idade? ')
//     console.log();
//     console.log(`Seja bem vindo(a) ${nome}!`);
//     if (idade >= 18){
//         console.log('Você é maior de idade');
//     } else {
//         console.log('Você é menor de idade');
//     }
//     console.log();
// }

// saudacao();

function saudacao(nome, ano) {
  let idade = 2022 - ano;
  console.log();
  console.log(`Seja bem vindo(a) ${nome}!`);
  if (idade >= 18) {
    console.log("Você é maior de idade");
  } else {
    console.log("Você é menor de idade");
  }
  console.log();
}

let nome = prompt("Qual o seu nome? ");
let nasc = prompt("Qual o seu ano de nascimento? ");

saudacao(nome, nasc);
