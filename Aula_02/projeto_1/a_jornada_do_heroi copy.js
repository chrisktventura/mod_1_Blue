var prompt = require('prompt-sync')();

let sim = 0;
let nao = 0;

const historia = ["h1","h2","h3","h4","h5"] 

const perguntas = ["p1","p2","p3","p4","p5"]

const resultados = ["resultado1","resultado2","resultado3","resultado4","resultado5"]
  

for(var i = 0; i < perguntas.length; i++){
    console.log(perguntas[i])
    let resposta = prompt("Digite sim ou não: ")
    while(resposta != 'sim' && resposta != 'nao'){
        resposta = prompt("Digite sim ou não: ")
    }

    console.log(historia[i])
    if(resposta == 'sim'){
        sim += 1 
    }else{
        nao += 1
    }
}
    if(sim === 0){
        console.log(resultado[0])
    }
    if(sim === 1){
        console.log(resultado[1])
    }
    if(sim === 2){
        console.log(resultado[2])
    }
    if(sim === 3){
        console.log(resultado[3])
    }
    if(sim === 4){
        console.log(resultado[4])
    }
   