var prompt = require('prompt-sync')();

let sim = 0;
let nao = 0;

const perguntas = {
    inicio: "", 
    ask1: "A ",
    ask2: "B ",
    ask3: "C ",
    ask4: "D ",
    ask5: "E ",
   
}  
const resultados = {
    res1sim: "",
    res2sim: "", 
    res3sim: "",
    res4sim: "",
    res5sim: ""

}
const historia = {
    inicio: "",
    parte1: "",
    parte2: "",
    parte3: "",
    parte4: "",

}
for(let i of [1,2,3,4,5]){
   
    console.log(perguntas[`ask${i}`])
    let resposta = prompt("Digite sim ou não: ")
    while(resposta != 'sim' && resposta != 'nao'){
        resposta = prompt("Digite sim ou não: ")
    }

    console.log(historia[`parte${i}`])
    if(resposta == 'sim'){
        sim += 1 
    }else{
        nao += 1
    }
}   
