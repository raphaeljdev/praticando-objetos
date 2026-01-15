const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
  score: 865,
  recorrente: true,
  tags: ['premium', 'clube'],
};
console.log(Object.keys(cliente));
// Saída: ['nome', 'cpf', 'email', 'score', 'recorrente', 'tags']
console.log(Object.values(cliente));
// Saída: ['Joana A', '12345678987', 'j@j.com', 865, true, ['premium', 'clube']]
console.log(Object.entries(cliente));
// Saída: [['nome', 'Joana A'], ['cpf', '12345678987'], ['email', 'j@j.com'], ['score', 865], ['recorrente', true], ['tags', ['premium', 'clube']]]
for (const info in cliente) {
  const texto = `chave ${info}, valor do tipo ${typeof cliente[info]}`;
  console.log(texto);
}
