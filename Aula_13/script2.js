const pessoa = {
    nome: 'Christopher',
    idade: 26,
    cidade: 'Montenegro',
    empresa: 'Blue',
    interesses: ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes']
};

console.log(pessoa.interesses);
console.log(pessoa.interesses[1]);

const lista = ['teste', 'teste2'];

pessoa.teste = lista;
console.log(pessoa);

pessoa.teste[1] = 'ja testei';

console.log(pessoa);