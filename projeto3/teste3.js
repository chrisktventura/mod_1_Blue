var prompt = require("prompt-sync")();

let status = {
  saude: 100,
  ouro: 0,
  magia: 10,
  poder: 8 
}
let controle = { 
    ctrSaude: function (saude, Up) {
    if (Up) {
      this.saude += saude;
    } else {
      this.saude -= saude;
    }
  },ctrOuro: function (ouro, Up){
      if(Up){
          this.ouro += ouro
      }else{
          this.ouro -= ouro
      }
  },ctrMagia: function(magia, Up){
      if(Up){
          this.magia += magia;
      }else{
          this.magia -= magia;
      }
  },ctrPoder: function(poder, Up){
      if(Up){
          this.poder += poder;
      }else{
          this.poder -= poder;
      }
  }
}

let historia = [];
let perguntas = [];
let resposta;

let tempo = 1;
let estudar;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}