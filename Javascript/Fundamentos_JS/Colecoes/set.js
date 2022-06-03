/*
Coleção - Set

Sets são estruturas que armazenam 
apenas valores únicos (que não se
repetem)
*/

const myArray = [1, 1, 2, 2, 3, 4, 5, 8, 6, 7, 9, 2, 3, 3, 1];

const mySet = new Set(myArray);

mySet;
// Set(9) {1, 2, 3, 4, 5, 8, 6, 7, 9}

/*
Métodos - Map

Adicionar, ler e deletar
*/
const mySet = new Set();
mySet.add(1);
mySet.add(4);

mySet.has(4);
// true

mySet.has(3);
// false

mySet.delete(5);

/*
Observações

Possui valores únicos;

Em vez da propriedade length, 
consulta-se o número de registros 
pela propriedade size;

Não possui os métodos map, filter, 
reduce, etc
*/