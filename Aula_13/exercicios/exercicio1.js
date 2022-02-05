// const pessoa = {
//   nome: "Chris",
//   idade: 0,
//   peso: 62 + " kg",
//   altura: 1.67,

//   envelhecer: function () {
//     this.idade++;
//   },
//   engordar: function () {
//     this.peso++;
//   },
//   emagrecer: function () {
//     this.pes--;
//   },
//   crescer: function () {
//     this.altura += 0.5;
//   },
//  bio = '',

// };

const pessoa = {
  nome: "chris",
  idade: 16,
  peso: 62,
  altura: 1.65,
  envelhecer: function envelhecer(){
    for (let i = 0; i < x; i++) {
      this.idade++;
      if (this.idade < 22) {
        this.crescer(0.5);
      }
    }
  },
  engordar: function engordar(x) {
    this.peso += x;
  },
  emagrescer: function emagrescer(x) {
    this.peso -= x;
  },
  crescer: function crescer(x) {
    this.altura += x;
  },
  bio: function bio() {
    return `${this.nome}, ${this.idade} anos, ${this.peso} kg, ${this.altura} cm`;
  },
};
console.log(pessoa.bio());
