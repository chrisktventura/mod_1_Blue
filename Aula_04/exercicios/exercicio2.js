// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

var prompt = require('prompt-sync')();

let resp = +prompt("Tente adivinhar o número que o computador escolheu: ");
let comput = Math.floor(Math.random() * 10 + 1)

   
if(resp == comput){
    console.log(`Computador escolheu: ${comput}`)
    console.log("Você acertou!")
}else{
    console.log(`Computador escolheu: ${comput}`)
    console.log("Você errou!")
}
