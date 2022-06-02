/* 
Arrays - Spread
(Utiliza ao chamar uma função)

Uma forma de lidar separadamente
com  elementos 
*/
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
/* 
"(...numbers)" - Spread
O que era parte de um array se 
torna um elemento independente
*/


/* 
Arrays - Rest
(Utiliza ao declarar uma função)

Combina os argumentos em um
array
*/

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3
/*
O que era um elemento independente
se torna parte de um array
*/