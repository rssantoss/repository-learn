/*
Tratando erros - Throw

Faz o tratamento dando uma mensagem
de erro, se houver
*/
function verificaPalindromo(string) {
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');
// false

verificaPalindromo('');
// String inválida

// Throw
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');
// false

verificaPalindromo('');
// Uncaught String inválida