var prompt = require("prompt-sync")();

let nascimento = prompt("digite seu ano de nascimento: ");

function voto(ano) {
  const atual = new Date();
  const anoAtual = atual.getFullYear();
  const idade = anoAtual - nascimento;
  if (idade < 16) {
    console.log("Voto NEGADO!");
  } else if (idade >= 18 && idade < 70) {
    console.log("Voto OBRIGATÓRIO!");
  } else {
    console.log("Voto OPCIONAL!");
  }
}
voto();


