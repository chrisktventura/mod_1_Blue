var prompt = require('prompt-sync')();

let sim = 0;

const historia = [
    // Inicio
    `Doente de amor, ${nome} foi em busca de um remédio na vida noturna,
    como uma flor da noite em uma bote ali da zona sul...`,
    // Historia parte 1
    `${nome}, ira tentar curar a dor deste amor na boate azul... 
    \nE quando a noite vai se agonizando no clarão da aurora... 
    \nOs integrantes da vida noturna se foram dormir...`,
    // Historia parte 2
    `E a dama da noite estava comigo também foi embora... 
    \nFecharam-se as portas sozinho tive que sair.
    \nSair de que jeito? se nem sei o rumo para onde vou.`,
    // Historia parte 3
    `Muito vagamente me lembro onde estou,
    \nem uma boate aqui na zona sul...`,
    // Historia parte 4
    "h5"
]

const perguntas = [
    // Pergunta 1
    `A dor do amor é com outro amor que a gente cura? 
    \nResponda sim ou não: `,
    // Pergunta 2
    `${nome}, você deseja continuar a noite na boate ? 
    \nResponda sim ou não: `,
    // Pergunta 3
    `${nome}, você deseja sair da boate? 
    \nResponda sim ou não: `,
    // Pergunta 4
    `${nome}, você consegue lembrar por que veio a boate? 
    \nResponda sim ou não: `,
    // Pergunta 5
    "p5"
]

const resultados = [
    //resultado 0 sim
    `${nome}, você continua doente de amor 
    \ne não procurou remédio na vida noturna!`,
    //resultado 1 ou 2 sim
    "resultado2",
    //resultado 3 sim
    "resultado3",
    //resultado 4 sim
    "resultado4",
    //resultado 5 sim
    "resultado5"
]

for (var i = 0; i < perguntas.length; i++) { // i representa INDICE
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
    console.log(`
$ { nome }, você continua doente de amor e não procurou remédio na vida noturna!`);
}