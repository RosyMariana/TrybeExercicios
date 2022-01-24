// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'jaca'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['whey', 'canela'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
