export const priceString = function  (price) {
  return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}