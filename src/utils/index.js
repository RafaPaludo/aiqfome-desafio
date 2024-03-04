/**
 * Formats the price with the BRL currency.
 * @param {number} price 
 * @returns {String}
 */
export const priceString = function  (price) {
  return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}