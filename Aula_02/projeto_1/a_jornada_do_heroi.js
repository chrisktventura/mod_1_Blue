var prompt = require('prompt-sync')();

let sim = 0;
let nao = 0;
cont = 0;

const histInicio = ("");
const q1 = ("");
const hist2 = ("");
const q2 = ("");
const hist3 = ("");
const q3 = ("");
const hist4 = ("");
const q4 = ("");
const hist5= ("");
const q5 = ("");
const resultado0s = ("");
const resultado1e2s = ("");
const resultado3s = ("");
const resultado4s = ("");
const resultado5s = ("");


for(var i = 0; i < perguntas.length; i++){
    console.log(perguntas[i])
    let resposta = prompt("Digite sim ou não: ")
    while(resposta != 'sim' && resposta != 'nao'){
        resposta = prompt("Digite sim ou não: ")
    }

    console.log(historia[i])
    if(resposta == 'sim'){
        sim += 1 
    } else {
        nao += 1
    }
}
    if(sim === 0){
        console.log(resultado0s)
    }
    if(sim === 1){
        console.log(resultado1e2s)
    }
    if(sim === 2){
        console.log(resultado3s)
    }
    if(sim === 3){
        console.log(resultado4s)
    }
    if(sim === 4){
        console.log(resultado5s)
    }
   