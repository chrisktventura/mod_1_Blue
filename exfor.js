var num = 2;
var arrayParaOFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var contadorRegressivo = 10
var contador = 0;

for (var i = 0; i < num; i++) {
    console.log(num)
}

for (var i = 0; i < arrayParaOFor.length; i++) {
    console.log(arrayParaOFor[i]);
}

while (contadorRegressivo > 0) {
    console.log(num)
    contadorRegressivo--
}

while (contador >= 10) {
    console.log(contador)
    contador++
}

const filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter"];

for (const filme of filmes) {
    console.log(filme);
}