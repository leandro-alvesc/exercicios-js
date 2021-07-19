Array.prototype.map2 = function(callback) {
  newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array com apenas os preços

const getPrice = (value) => value.preco;

const parseJSON = (value) => JSON.parse(value);

let precos = carrinho.map2(parseJSON).map2(getPrice);

console.log(precos);