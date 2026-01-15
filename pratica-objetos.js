const pessoa = {
  nome: 'Raphael',
  nascimento: '2020-01-01',
  cpf: '23445667889',
  pontuacao: 4567,
  trofeus: ['Speedruner', 'Indie'],
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.trofeus[1]);

delete pessoa.cpf;

console.log(pessoa);

function exibeTrofeus(listaTrofeu) {
  for (const trofeu of listaTrofeu) {
    console.log('trofeu:', trofeu);
  }
}

exibeTrofeus(pessoa.trofeus);
