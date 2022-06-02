/*
Arrow Functions
*/

const helloWorld = function() {
    return "Hello World";
}

// Pode ser diminuída para: 
const helloWorld = () => {
    return "Hello World";
}

// Pode ser diminuída ainda mais para:
const helloWorld = () => "Hello World";

/*
Caso exista apenas uma linha,
pode dispensar as chaves e o
return;
Caso exista apenas um parâmetro,
pode dispensar os parênteses
*/

// Exemplo
const soma = (a, b) => a + b;

soma(4, 6);
// 10

// Exemplo 2
const soma = a => a;

soma(4);
// 4

//Arrow Function não faz hoisting!

/*
Outras Restrições

"this" sempre será o objeto
global. Métodos para modificar
seu valor não irão funcionar;

Não existe o objeto "arguments";

O construtur (ex: new MeuObjeto())
também não pode ser utilizado;

Para métodos, sempre utlizar uma
função comum
*/