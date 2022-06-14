/*
Map

Cria um novo array. Dessa forma
não modifica o original;

Realizar as operações em ordem
*/

// Função a ser executada em cada elemento
// thisArg, valor de this dentro da função callback
Array.map(callback, thisArg)

callback(item, index, array)

/*
Map vs forEach

Valor de retorno;

Considere se o array
auxiliar será necessário
*/

// Usando Map
const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2);
// [2, 4, 6, 8, 10];

// Usando forEach
const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2);
// undefined

