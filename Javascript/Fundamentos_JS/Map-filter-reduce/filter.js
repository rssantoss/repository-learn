/*
Filter

Cria um novo array. Dessa forma,
não modifica o array original
*/

array.filter(callback, thisArg)
// Função a ser executada em cada elemento
// thisArg, valor de this dentro da função callback

const frutas = ['maçã verde', 'maçã fuji', 'banana', 'laranja'];

frutas.filter((fruta) => fruta.includes('maçã'));
// ['maçã verde', 'maçã fuji'];