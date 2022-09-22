/*
ESCREVER CÓDIGOS IMUTAVEL
Quando você deve usar o map

    Quando você precisa obeter um novo array, com a mesma quantidade de itens do array original

    [ 1, 2, 3 ], [ 3, 6, 9 ]
*/

const numbers = [1, 2, 3];

//Arrow Function que tem um unico parametro, nãp precisa usar PARENTESES ()**
const doubledNumbers = numbers.map(item => {
    //função que vai executar para cada item do ARRAY
    //A FUNÇÃO PODE RECEBER 3 PARAMETROS    
    return item * 2;

})

console.log(doubledNumbers)// expected output: [ 2, 4, 6 ]
console.log(numbers === doubledNumbers);// expected output: false
console.log(numbers, doubledNumbers);// expected output: [ 1, 2, 3 ] [ 2, 4, 6 ]


//Arrow Function Sem os paranteses
const doubledNumbersS = numbers.map(item => item * 2)

console.log(doubledNumbersS)// expected output: [ 2, 4, 6 ]