var prompt = require('prompt-sync')();
const nome = prompt('Digite seu nome para percorrer a história da boate azul: ');
let sim = 0;

const historia = [
    // Inicio
    `\nDoente de amor, ${nome} foi em busca de um remédio na vida noturna, como uma flor da noite em uma bote ali da zona sul...`,
    // Historia parte 1
    `\n${nome}, ira tentar curar a dor deste amor na boate azul... E quando a noite vai se agonizando no clarão da aurora... Os integrantes da vida noturna se foram dormir...`,
    // Historia parte 2
    `\nE a dama da noite estava com você também foi embora... Fecharam-se as portas, e talvez sozinho, você deve sair. \nSair de que jeito? se nem sei o rumo para onde vou.`,
    // Historia parte 3
    `\nMuito vagamente você se lembra que está em uma boate aqui na zona sul...`,
    // Historia parte 4
    `\n${nome}, talvez você tenha bebido demais e não consegue lembrar se quer, qual é o nome daquela mulher, a flor da noite da boate azul`
]

const perguntas = [
    // Pergunta 1
    `\nA dor do amor é com outro amor que a gente cura? `,
    // Pergunta 2
    `\n${nome}, você deseja continuar a noite na boate ? `,
    // Pergunta 3
    `\n${nome}, você viu a Dama da noite indo embora? `,
    // Pergunta 4
    `\n${nome}, você consegue lembrar por que veio a boate? `,
    // Pergunta 5
    `\n${nome}, você se sente curado da dor de amor?  `
]

const resultados = [
    //resultado 0 sim
    `\n${nome}, você continua doente de amor e não procurou remédio na vida noturna!`,
    //resultado 1 ou 2 sim
    `\n${nome}, você até tentou procurar a cura do mal de amor, mas não conseguiu encontrar!`,
    //resultado 3 sim
    `\n${nome}, você chegou na boate azul, mas logo foi embora um pouco embriagado.`,
    //resultado 4 sim
    `\n${nome}, você ficou até o final, mas não conseguiu se lembrar qual era o nome daquela mulher.`,
    //resultado 5 sim
    `\n${nome}, você curou sua dor de amor saindo pela porta da boate e encontrando a Dama da noite que estava com você.`
]

for (var i = 0; i < perguntas.length; i++) { 
    console.log(historia[i])
    console.log(perguntas[i])
    let resposta = prompt("Digite sim ou não: ")

    while (resposta != 'sim' && resposta != 'nao') {
        resposta = prompt("Digite sim ou não: ")
    }

    if (resposta == 'sim') {
        sim += 1
    }
}

if (sim === 1) {
    console.log(resultados[0])
} else if (sim === 2) {
    console.log(resultados[1])
} else if (sim === 3) {
    console.log(resultados[2])
} else if (sim === 4) {
    console.log(resultados[3])
} else if (sim === 5) {
    console.log(resultados[4])
} else {
    console.log(`${nome}, você continua doente de amor e não procurou remédio na vida noturna!`);
}