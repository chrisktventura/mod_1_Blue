/* 1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 

Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.

Após o aumento ser realizado, informe na tela:

O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento.*/

var prompt = require("prompt-sync")();

let sal = parseFloat(+prompt("Informe o Salário: "));

if (sal <= 280) {
  res = sal * 0.2 + sal;
  console.log(`
    Salário antes do reajuste: R$${sal}
    Percentual de reajuste: 20 %
    Valor do aumento: R$${sal * 0.2}
    Salário com reajuste: R$${res}`);
} else if (sal > 280 && sal <= 700) {
  res = sal * 0.15 + sal;
  console.log(`
    Salário antes do reajuste: R$${sal}
    Percentual de reajuste: 15 %
    Valor do aumento: R$${sal * 0.15}
    Salário com reajuste: R$${res}`);
} else if (sal > 700 && sal <= 1500) {
  res = sal * 0.1 + sal;
  console.log(`
    Salário antes do reajuste: R$${sal}
    Percentual de reajuste: 10 %
    Valor do aumento: R$${sal * 0.1}
    Salário com reajuste: R$${res}`);
} else {
  res = sal * 0.05 + sal;
  console.log(`
    Salário antes do reajuste: R$${sal}
    Percentual de reajuste: 5 %
    Valor do aumento: R$${sal * 0.05}
    Salário com reajuste: R$${res}`);
}
