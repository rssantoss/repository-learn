/*
Reduce

Executa uma função em
todos os elementos do
array, retornando um
valor único
*/

// Callback: função a ser executada a partir do acumulador
// initialValue: valor sobre o qual o retorno final irá atuar

const callbackFn = function(accumulator, currentValue, index, array) {
    // faz algo
};

array.reduce(callbackFn, initialValue);
