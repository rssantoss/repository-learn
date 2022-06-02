/*
This - Call

No exemplo, quando utilizado 
o método call, é colocado o
objeto ao qual o this deve 
se referir
*/

const pessoa = {
    nome: 'Rafael',
};

const animal = {
    nome: 'Louro',
};

function getSomething() {
    console.log(this.nome); 
}

getSomething.call(pessoa);
// Rafael

getSomething.call(animal);
// Louro

/*
É possível passar parâmetros
para essa função separando-os
por vírgulas
*/

//Exemplo 2
const muObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 7); // Objeto servindo de referência e os argumentos
// 14