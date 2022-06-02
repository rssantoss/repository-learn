/* 
Função Autoinvocável

Uma função anônima entre parênteses,
seguida por outro par de parênteses,
que representa sua chamada 
*/

//Exemplo 1
(
    function(){
        let name = "Rafael Silva Santos";
        return name;
    }   
)();
// Rafael Silva Santos

/*
Pode ser utilizada com parâmetros
ou armazenada em uma variável
*/

// Exemplo 2
(
    function(a, b) {
        return a + b;
    }
)(1, 2);
// 3

// Exemplo 3
const soma = (
    function() {
        return a + b;
    }
)(1, 2);

console.log(soma) // 3
