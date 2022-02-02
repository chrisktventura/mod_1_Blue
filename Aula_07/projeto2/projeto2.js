var prompt = require("prompt-sync")();

let rodadas = +prompt("Escolha quantas rodadas deseja jogar: ");
let cont = 1;
let placarJ = 0;
let placarC = 0;
let desCont = 0;

while (true) {
  if (desCont === 1) {
    break;
  }
  while (cont <= rodadas) {
    console.log("rodadas --> ", rodadas);
    console.log("#### JokenPo ####\n");
    console.log("1 - Pedra \n2 - Papel \n3 - Tesoura\n");

    // lógica
    let computador = Math.floor(Math.random() * 3 + 1);

    // lógica de escolha do jogador - 1
    let jogador = prompt("Faça sua jogada: ");
    // validação de entrada 
    while (jogador < 1 || jogador > 3) {
      console.log("Opção Inválida");
      jogador = +prompt("Escolha uma opção válida: ");
    } // lógica de escolha jogador - 2
    if (jogador == 1) {
      console.log("Jogador escolheu Pedra!\n");
    } else if (jogador == 2) {
      console.log("Jogador escolheu Papel\n");
    } else if (jogador == 3) {
      console.log("Jogador escolheu Tesoura\n");
    }
    // lógica de escolha computador - 1
    if (computador == 1) {
      console.log("Computador escolheu Pedra!\n");
    } else if (computador == 2) {
      console.log("Computador escolheu Papel!\n");
    } else if (computador == 3) {
      console.log("Computador escolheu Tesoura!\n");
    }
    // comparação de resultados
    if (jogador == computador) {
      console.log("Empatou");
    } else if (
      (jogador == 1 && computador == 3) ||
      (jogador == 2 && computador == 1) ||
      (jogador == 3 && computador == 2)
    ) {
      placarJ++;
      console.log(`Jogador vence a rodada ${cont}`);
    } else {
      placarC++;
      console.log(`Computador vence a rodada ${cont} `);
    }
    console.log(`\nPlacar \nJogador  ${placarJ}  X  ${placarC}  Computador \n`);

    cont++;
  } // placar
  if (placarC > placarJ) {
    console.log(
      `O Computador é o CAMPEÃO com ${placarC} pontos em ${rodadas} rodadas!\n`
    );
  } else if (placarJ > placarC) {
    console.log(
      `O Jogador é o CAMPEÃO com ${placarJ} pontos em ${rodadas} rodadas!\n`
    );
  } else {
    console.log("O jogo terminou EMPATADO ");
  }
  desCont = +prompt("Deseja encerrar ? Se sim digite 1: ");
  if (desCont != 1) {
    cont = 1;
    placarC = 0;
    placarJ = 0;
    rodadas = +prompt("Escolha quantas rodadas deseja jogar: ");
    console.log("rodadas --> ", rodadas);
  }
}
