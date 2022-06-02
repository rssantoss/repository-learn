/*
This - Apply

Tem uma implementação
parecida com a call
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

getSomething.apply(pessoa);
// Rafael

getSomething.apply(animal);
// Louro

/*
No momento de passar os argumentos,
eles serão passados dentro de
um array
*/

//Exemplo 2
const muObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 7]); //Argumento dentro do array
// 14