/*
Primeiro teste TypeScript - Simples Soma
*/

function soma (a: number, b: number) {
    return a + b;
}

console.log(soma(5,10))
// 15

console.log(soma("5","10"))
//Argument of type 'string' is not assignable to parameter of type 'number'.
