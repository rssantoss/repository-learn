/*
Assíncrono - Promises

Que não ocorre ou não se efetiva ao
mesmo tempo;

Inicialmente, seu valor é desconhecido. 
Ela pode, então ser resolvida ou
rejeitada;

Uma promise pode ter 3 estados, são eles:
Pending, Fulfilled, Rejected 
*/
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvido!'));
    }, 3000);
});

await myPromise
    .then((result) => result + ' Passando pelo then')
    .then((result) => result + ' acabouu!')
    .catch((err) => console.log(err.message));
// Após 3 segundos, retornará o valor
// "Resolvido! Passando pelo then acabouu!"
    