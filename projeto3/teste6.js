const prompt = require("prompt-sync")();

const personagem = {
  nome: "Jovem Místico",
  nivel: 1,
  fome: 100,
  mana: 100,
  ouro: 0,
  stamina: 100,
  poder: 5,
  exp: 0,

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
  },
  checkxp: (exp) => {
    if (exp > 100) {
        this.exp += exp
        this.nivel++

    }
  },
};
function status() {
    if (personagem.fome > 99) {
      personagem.fome == 100;
      console.log(`Jovem Místico está satisfeito!`);
    } else if (personagem.fome < 1) {
      personagem.fome == 0;
      console.log(`Jovem Místico está morrendo de fome!`);
    }else if (personagem.stamina > 99){
    personagem.stamina == 100
    console.log(`Jovem está recuperado.`)
   } else if (personagem.stamina < 5){
    console.log(`Jovem precisa descansar.`)
  } else if (personagem.mana > 99){
    personagem.mana == 100
    console.log(`Sua mana está carregada.`)
  } else if(personagem.mana < 1){
    personagem.mana == 0 
    console.log(`Jovem precisa recuperar mana para continuar.`);
  }else if(personagem.poder > 149){
    personagem.poder == 150
    console.log(`Jovem tem poder suficiente para retomar seu reino.`);
  }else if(personagem.poder < 150)
  console.log(`jovem não tem poder suficiente, talvez precise praticar e estudar mais.`)
  console.log();

  for (let index = 0; index < 5; index++) {}}