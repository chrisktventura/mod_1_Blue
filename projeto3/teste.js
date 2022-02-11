const prompt = require("prompt-sync")();
//se tornar um mago, dark bruxo, feiticeiro.
//mago - dia; feiticeiro - tarde; Dark bruxo - noite.
let desejaContinuar;

do {
  let resposta = "";

  const comer = [
    "Jovem Místico encontrou um lago e\nconseguiu pescar um peixe!",
    "Jovem Místico achou uma bananeira\ne comeu uma banana!",
    "Encontrou um alce morto,\ne o preparou em uma fogueira",
  ];
  const estudar = [
    "\nJovem Místico começou seus estudos das plantas e flores!",
    "\nJovem Místico está aprendendo sobre os cristais!",
    "\nEle lê sobre astros e as leis Universais!",
  ];
  const pratica = [
    "\nEle começa a prática de alquimia!",
    "\nÉ hora de meditar e elevar suas vibrações!",
    "\nAgora ele está praticando a invisibilidade!",
  ];
  const dormir = [
    "Durante a noite, o Jovem Mìstico teve uma visão em seus sonhos de sua mãe lhe dizendo: filho...",
    "dormir2",
    "dormir3",
  ];

  const historia = [
    "\n   Há muito tempo, um casal que não conseguia engravidar,\nmisteriosamente tiveram uma criança. Quando ele tinha 5 anos,\nseu pai foi chamado para ir para a guerra para defender o seu\nreino. Quando guerra acabou o reino foi tomado por um mago\nsombrio,que se tornou rei, escravizando seu povo. Sua mãe foi\nraptada e transformada em escrava. Ele ficou sozinho vivendo\ncom o pouco que seu povo dava para ele.Todo dia ele ia para a\nfloresta tentar procurar algo para comer, certo dia na suas\ncaminhadas ele encontrou um livro velho. Curioso, começou a\nler esse livro e começou aprender magias. Com essas magias que\nele aprendeu, conseguia colher frutas nas mais altas árvores da\nFloresta. Ele então passou a ir sempre até o lugar mais secreto e\nfazer suas práticas para se fortalecer.\n",
    "\n   Com o tempo, ele conseguiu planejar a retomada de seu reino, criando estratégias para invadir o castelo, de forma que o mago sombrio não percebesse",
    "PARTE III",
  ];
  let dia = 1;
  let dias = 10;
  const personagem = {
    nome: "Jovem Místico",
    nivel: 1,
    fome: 100,
    mana: 100,
    ouro: 0,
    stamina: 100,
    poder: 5,
    exp: 0,

    ctrlNivel: (nivel) => {
      this.nivel++;
    },
    ctrlFome: (fome, Up) => {
      if (Up) {
        this.fome += fome;
      } else {
        this.fome -= fome;
      }
    },
    ctrlMana: (mana, Up) => {
      if (Up) {
        this.mana += mana;
      } else {
        this.mana -= mana;
      }
    },
    ctrlOuro: (ouro, Up) => {
      if (Up) {
        this.ouro += ouro;
      } else {
        this.ouro -= ouro;
      }
    },
    ctrlStamina: (stamina, Up) => {
      if (Up) {
        this.stamina += stamina;
      } else {
        this.stamina -= stamina;
      }
    },
    ctrlPoder: (poder, Up) => {
      if (Up) {
        this.poder += poder;
      } else {
        this.poder -= poder;
      }
    },checkxp: (exp) => {
      if (exp > 100){

      }
    }
  };

  function status() {
    if (personagem.fome > 99) {
      personagem.fome == 100;
      console.log(`Jovem Místico está satisfeito!`);
    } else if (personagem.fome < 1) {
      personagem.fome == 0;
      console.log(`Jovem Místico está morrendo de fome!`);
    }
  }

  console.log();

  for (let i = 0; i < dias; i++) {
    console.log("------------------------");
    console.log(historia[i]);

    do {
      console.log("--------------------------------------");
      console.log(`
Aqui estão as informações sobre o personagem:

Nível ${personagem.nivel},
${personagem.fome}% Satisfeito,
${personagem.mana}% de Mana,
${personagem.ouro} Moedas de Ouro,
${personagem.stamina}% de Stamina
${personagem.poder} pontos de poder`);

      console.log();
      resposta = prompt(
        `Escolha entre comer, estudar, praticar, dormir: `
      ).toLowerCase().trim();
      if (
        resposta !== "comer" &&
        resposta !== "estudar" &&
        resposta !== "praticar" &&
        resposta !== "dormir"
      ) {
        console.clear();
        console.log(`Digitou errado!`);
      } else if (resposta == "comer") {
        console.log(comer[i]);
        console.log();
        personagem.ctrlMana(10, true);
        personagem.ctrlFome(10, true);
        personagem.ctrlStamina(20, true);
        console.log();
        status();

        break;
      } else if (resposta == "estudar") {
        console.log();
        console.log(estudar[i]);
        console.log();
        personagem.ctrlMana(10, false);
        personagem.ctrlFome(20, false);
        personagem.ctrlPoder(5, true);
        status();
        break;
      } else if (resposta == "praticar") {
        console.log();
        console.log(pratica[i]);
        console.log();
        personagem.ctrlMana(10, false);
        personagem.ctrlFome(20, false);
        personagem.ctrlStamina(5, false);
        personagem.ctrlOuro(30, true);
        personagem.ctrlPoder(10, true);
        status();
        break;
      } else if (resposta == "dormir") {
        console.log();
        console.log(dormir[i]);
        console.log();
        personagem.ctrlFome(20, false);
        personagem.ctrlStamina(10, true);
        status();
        break;
      }
    } while (true);
  }
  personagem.ctrlNivel();

  for (let i = 0; i < historia.length; i++) {
    do {
      console.log(`
Aqui estão as novas informações sobre o personagem:

Nível ${personagem.nivel},
${personagem.fome}% Satisfeito,
${personagem.mana}% de Mana,
${personagem.ouro} Moedas de Ouro,
${personagem.stamina}% de Stamina
${personagem.poder} pontos de poder`);

      console.log();
      resposta = prompt(
        `Escolha entre se alimentar, estudar, praticar, dormir: `
      ).toLowerCase().trim();
      if (
        resposta !== "comer" &&
        resposta !== "estudar" &&
        resposta !== "praticar" &&
        resposta !== "dormir"
      ) {
        console.clear();
        console.log(`Digitou errado!`);
      } else if (resposta == "comer") {
        console.log(comer[i]);
        console.log();
        personagem.ctrlFome(10, true);
        personagem.ctrlStamina(10, true);
        console.log();
        status();
        break;
      } else if (resposta == "estudar") {
        console.log();
        console.log(estudar[i]);
        console.log();
        personagem.ctrlMana(10, false);
        personagem.ctrlFome(20, false);
        status();
        break;
      } else if (resposta == "praticar") {
        console.log();
        console.log(pratica[i]);
        console.log();
        personagem.ctrlMana(10, false);
        personagem.ctrlFome(20, false);
        personagem.ctrlOuro(30, true);
        status();
        break;
      } else if (resposta == "dormir") {
        console.log();
        console.log(dormir[i]);
        console.log();
        personagem.ctrlStamina(10, true);
        personagem.ctrlFome(20, false);
        status();
        break;
     
      }   if (personagem.poder < 150) {
        console.log(
          `Talvez você precise de mais poder para continuar a avançar...`
        );
      }
    } while (true);
  }
  while (desejaContinuar !== "sim" && desejaContinuar !== "nao") {
    desejaContinuar = prompt(`Deseja jogar novamente? `).toLowerCase();
    if (desejaContinuar == "nao") {
      console.clear();
      console.log(`Ok! Até a próxima!`);
    } else {
      console.clear();
      console.log(`Vamos lá!`);
    }
  }
} while ((desejaContinuar = "sim"));
{
}
