// Aula - 11 - Exercicio de fixação - 2

// Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'. 
// Valide a data e retorne NULL caso a data seja inválida
var prompt = require("prompt-sync")();

const data = prompt("Digite uma data especial (ex: 25/10/1995) ");

let datas = data.split("/");
calendario = 
function(dia, mes, ano){
    if(mes == '01'){
        meses = 'janeiro';
    }else if(mes == '02'){
        meses = 'fevereiro';
    }else if(mes == '03'){
        meses = 'março';
    }else if(mes == '04'){
        meses = 'abril';
    }else if(mes == '05'){
        meses = 'maio';
    }else if(mes == '06'){
        meses = 'junho';
    }else if(mes == '07'){
        meses = 'julho';
    }else if(mes == '08'){
        meses = 'agosto';
    }else if(mes == '09'){
        meses = 'setembro';
    }else if(mes == '10'){
        meses = 'outubro';
    }else if(mes == '11'){
        meses = 'novembro';
    }else if(mes == '12');{
        meses = 'dezembro';
    }
}
console.log(datas);

console.log(`${datas[0]} de ${datas[1]} de ${datas[2]}`);

// function formatData(d, m, a){
//     if(d >= 1 || d <= 31){

//     }else if(m >= 1 || m <= 12){

//     }else if(a > 1 || a <= 3000){

//     }else {
//         console.log("data inválida.");
//     }
// }

