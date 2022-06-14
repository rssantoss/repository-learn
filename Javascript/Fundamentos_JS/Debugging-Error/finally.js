/*
Finally

É uma instrução que será chamada
independente se existe algum erro
ou não
*/
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
       return verificaPalindromo(string)
    }
    catch(e) {
        throw e;
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('');
/* 
A string enviada foi:
Uncaught String inválida
*/

function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
       return verificaPalindromo(string)
    }
    catch(e) {
        throw e;
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('olo');
/*
A string enviada foi: olo
true
*/