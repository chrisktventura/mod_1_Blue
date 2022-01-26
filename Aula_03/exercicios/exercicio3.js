var prompt = require('prompt-sync')();

var n = prompt("Digite um numero");
var total=n/2;
if(n/2 == 0){
    console.log("O número é Par");
}
if(n/2 == 1){
    console.log("O número é Impar");
}
console.log(total);