const prices = [ 20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);

console.log(salePrices);


/*--------------------------------------------------*/

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]
// USANDO MAP para pegar os acima de 30 [exemplo abaixo]
// e colocando ele em promoção dividindo por 2
  const saleProducts =  products.map( product => { // o parametro [PRODUCT] você não esta recebendo uma copia do objeto, esta recebendo o proprio objeto
      if(product.price >= 30){ // pega somente os produtos com valor igual ou acima de 30
          return {
              name: product.name, //recuperando o nome do produto
              price: product.price / 2 // recuperando o valor do produto dividindo por 2
          }
      }
      // retornando o array completo
      // com os produtos que tem valores menor que 30
      // e com os produtos com valores acima de 30 dividido por 2
      return product 
  });

  console.log(saleProducts);
  // [
  //   { name: 'Mouse Sem Fio', price: 15 },
  //   { name: 'Pen Drive', price: 25 },
  //   { name: 'Cartucho de Tinta', price: 25 },
  //   { name: 'Suporte Ergonômico para Notebook', price: 23 },
  //   { name: 'Repetidor de Sinal Wi-Fi', price: 22 }
  // ]