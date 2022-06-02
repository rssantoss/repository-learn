/*
Loop - For

Loop dentro de elementos
iteráveis (array, strings).
*/

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 9, 456, 350, 50];

multiplicaPorDois(meusNumeros);
// [4, 18, 912, 700, 100]

/*
For...in

Loop entre propriedades 
enumeráveis de um objeto
*/

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Rafael",
    idade: "20",
    cidade: "Brasília"
}

forInExemplo(meuObjeto);
// nome
// idade
// cidade

// OU

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "Rafael",
    idade: "20",
    cidade: "Brasília"
}

forInExemplo(meuObjeto);
// Rafael
// 20
// Brasília

/*
For...of

Loop entre estruturas iteráveis 
(array, strings).
*/

function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = "rafael";

logLetras(palavra)

// r
// a
// f
// a 
// e
// l

// Exemplo 2
function logNumeros(nums) {
    for(num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logLetras(nums)
// 30
// 20
// 233
// 2