// Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:

// Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
// Acesse o índice 2 da lista que está dentro do objeto.
// Exiba no console a frase: "Ingrediente complementar: [ingrediente]".

const receita = {
  nome: 'Panqueca Proteica',
  ingredientes: [
    '1 banana',
    '2 Ovos',
    '40g de aveia',
    '40g de whey protein',
    '5g de canela',
  ],
  tempoDePreparo: '5 minutos',
};

ingredientesDaReceita = receita.ingredientes;

console.log(ingredientesDaReceita);

console.log(ingredientesDaReceita[2]);

ingredientesDaReceita.push('5g de mel');

console.log(ingredientesDaReceita);

console.log(
  'Ingrediente complementar:',
  ingredientesDaReceita[ingredientesDaReceita.length - 1],
);
