// const cliente = {
//   nome: 'Joana A',
//   score: 865,
//   recorrente: true,
//   tags: ['premium', 'clube'],
//   saudarCliente: function () {
//     console.log(`boas vindas, ${this.nome}`);
//   },
// };

// cliente.saudarCliente();

const cliente = {
  nome: 'Joana A',
  score: 865,
  recorrente: true,
  tags: ['premium', 'clube'],
  saudarCliente() {
    console.log(`boas vindas, ${this.nome}`);
  },
};

cliente.informarScore = function informarScore() {
  console.log(`seu score é ${this.score}`);
};

cliente.informarScore();
//seu score é 865
