/*
Try...catch

Dentro do bloco "Try" será feita
a verificação de um pedaço de
código e se existir um erro,
será capturado na função "Catch";

Catch permite manipular o erro
*/
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e)
    }
}

tryCatchExemplo('');
// String inválida

function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        throw e;
    }
}

tryCatchExemplo('');
// Uncaught String inválida