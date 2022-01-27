// Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade 
//Assim, a fórmula a seguir define a sequência: 
//Fn = Fn - 1 + Fn - 2

var prompt = require('prompt-sync')();
  const number = 20
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci');
console.log(n1); 
console.log(n2); 

nextTerm = n1 + n2;

while (nextTerm <= number) {
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}