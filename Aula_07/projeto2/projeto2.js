var prompt = require("prompt-sync")();

let rodadas = +prompt("Escolha quantas rodadas deseja jogar: ");
let cont = 0;
let placarJ = 0;
let placarC = 0;
let desCont = 0;
let escolhas = ["pedra", "papel", "tesoura"];

while (true) {
  if (desCont === 1) {
    break;
  }
  for (i = 0; i < rodadas; i++) {
    console.log("#### JokenPô ####\n");
    console.log("Pedra - Papel  - Tesoura\n");

    // lógica
    const computador = Math.floor(Math.random() * 3 + 1);

    // lógica de escolha do jogador - 1
    let jogador = prompt("Faça sua jogada: ").trim().toLowerCase();
    console.log();
    // validação de entrada
    while (jogador != "pedra" && jogador != "papel" && jogador != "tesoura") {
      console.log("Opção Inválida");
      jogador = prompt("Escolha uma opção válida: Pedra - Papel - Tesoura")
        .trim()
        .toLowerCase();
    }
    // lógica de escolha jogador - 2
    if (jogador === "pedra") {
      console.log("Jogador escolheu: Pedra!\n");
    } else if (jogador === "papel") {
      console.log("Jogador escolheu: Papel\n");
    } else if (jogador === "tesoura") {
      console.log("Jogador escolheu: Tesoura\n");
    }

    // lógica de escolha computador - 1
    if (computador == 1) {
      console.log("Computador escolheu: Pedra!\n");
    } else if (computador == 2) {
      console.log("Computador escolheu: Papel!\n");
    } else if (computador == 3) {
      console.log("Computador escolheu: Tesoura!\n");
    }
    // comparação de resultados
    if (
      (jogador == "pedra" && computador == 1) ||
      (jogador == "papel" && computador == 2) ||
      (jogador == "tesoura" && computador == 3)
    ) {
      cont++;
      console.log(`Empatou a rodada ${cont}`);
    } else if (
      (jogador == "pedra" && computador == 3) ||
      (jogador == "papel" && computador == 1) ||
      (jogador == "tesoura" && computador == 2)
    ) {
      placarJ++;
      cont++;
      console.log(`Jogador vence a rodada ${cont} !`);
    } else {
      placarC++;
      cont++;
      console.log(`Computador vence a rodada ${cont} !`);
    }
    console.log(
      `\n______ Placar _____\nJogador  ${placarJ}  X  ${placarC}  Computador \n`
    );
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
    console.log("O jogo terminou EMPATADO!!\n");
  }
  desCont = +prompt("Deseja encerrar ? Se sim digite 1: ");
  if (desCont != 1) {
    cont = 0;
    placarC = 0;
    placarJ = 0;
    rodadas = +prompt("Escolha quantas rodadas deseja jogar: ");
    console.log("rodadas --> ", rodadas);
  }
}
