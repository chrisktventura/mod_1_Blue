const prompt = require('prompt-sync')();
let r = true
let civ

let nome = prompt("Digite o seu nome: ")

let idade = +prompt("Digite o sua idade: ")

let end = prompt("Digite o seu endereço: ")

console.log("Escolha seu estado civíl (1 a 4):\n\n1) Solteiro(a)\n2)Casado(a)\n3)Divorciado(a)\n4)Viúvo(a)\n\n")

do{
    let resp1 = prompt("R: ")

    if (resp1 == 1){civ = "Solteiro(a)"
                    r = true}
    else if(resp1 ==2){civ = "Casado(a)"
                    r = true}
    else if(resp1 == 3){civ = "Divorciado(a)"
                    r = true}
    else if (resp1 == 4){civ = "Viúvo(a)"
                    r = true}
    else {console.log(`Digite uma resposta válida.`)
                    r = false}
} while (r == false)




console.log(`\tVamos rever os seus dados.`)
console.log(`\nNome: ${nome}\nIdade: ${idade} anos\nEndereço: ${end}\nEstado Civíl: ${civ}\n`)
