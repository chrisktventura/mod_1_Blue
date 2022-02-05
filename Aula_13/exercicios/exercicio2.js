var prompt = require("prompt-sync")();

let lista = [];
function funcionario(nome, cargo, salario) {
  (this.nome = nome), (this.cargo = cargo), (this.salario = salario);
}

do {
  console.log("registro de funcionarios");

  funcionario = new funcionario(
    prompt("digite o nome: "),
    prompt("digite o cargo: "),
    prompt("digite o salario: ")
  );
  lista.push(funcionario);
  let resp = prompt("deseja continuar cadastrando funcionarios? S ou N");
  } while (resp.toUpperCase() != "N"){

  };

console.log(lista);
