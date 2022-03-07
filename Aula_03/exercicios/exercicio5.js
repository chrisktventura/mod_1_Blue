var prompt = require("prompt-sync")();

let lados = [];

lados[0] = parseFloat(prompt("Lado 1: "));
lados[1] = parseFloat(prompt("Lado 2: "));
lados[2] = parseFloat(prompt("Lado 3: "));

lados.sort(function (a, b) {
  return b - a;
});

let A = lados[0];
let B = lados[1];
let C = lados[2];

let A2 = A ** 2;
let B2 = B ** 2;
let C2 = C ** 2;

let tipoLado;
let tipoAngulo;

if (A >= B + C) {
  console.log(`\nNÃO FORMA TRIÂNGULO!\n`);
} else {
  if (A == B && B == C) {
    tipoLado = "EQUILÁTERO";
  } else if (A == B || B == C || C == A) {
    tipoLado = "ISÓSCELES";
  } else {
    tipoLado = "ESCALENO";
  }
  if (A == B && B == C) {
    tipoLado = "EQUILÁTERO";
  } else if (A == B || B == C || C == A) {
    tipoLado = "ISÓSCELES";
  } else {
    tipoLado = "ESCALENO";
  }

  if (A == B && B == C) {
    tipoAngulo = "EQUIÂNGULO";
  } else if (A2 == B2 + C2) {
    tipoAngulo = "RETÂNGULO";
  } else if (A2 < B2 + C2) {
    tipoAngulo = "ACUTÂNGULO";
  } else if (A2 > B2 + C2) {
    tipoAngulo = "OBTUSÂNGULO";
  }
}
