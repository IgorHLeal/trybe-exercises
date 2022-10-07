// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'laranja', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'chocolate', 'leite em pó'];

const fruitSalad = (fruit, additional) => {
  const fruitSaladAdditional = [...fruit, ...additional];
  return fruitSaladAdditional;
}
console.log(fruitSalad(specialFruit, additionalItens));