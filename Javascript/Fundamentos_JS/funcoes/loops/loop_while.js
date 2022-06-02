/*
Loop - While

Executa instruções até
que a condição se torne
falsa
*/

function exemploWhile() {
    let num = 0

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile()
// 0
// 1
// 2
// 3
// 4
// 5

/*
Do...While

Também executa instruções até
que a condição se torne falsa
Porém a primeira execução
sempre ocorrerá
*/

function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num ++;
    } while(num <= 5)
}

exemploDoWhile()
// 0
// 1
// 2
// 3
// 4
// 5

// Exemplo 2
function exemploDoWhile() {
    let num = 7;

    do {
        console.log(num);
        num ++;
    } while(num <= 5)
}

exemploDoWhile()
// 7
