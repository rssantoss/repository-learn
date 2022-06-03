/*
Async - Await

Funções assíncronas precisam
dessas duas palavras chave
*/

async function resolvePromise() {
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve('Resolvido!');
    }, 4000);
});

    const resolved = await myPromise
        .then((result) => result + ' Passando pelo then')
        .then((result) => result + ' acabouu!')
        .catch((err) => console.log(err.message));

    return resolved;
}

resolvePromise()
// Promise {<pending>}

await resolvePromise()
// "Resolvido! Passando pelo then acabouu!"

// Utilizando Try e Catch
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvido!');
        }, 4000);
    });

    let result;
    
        try {
        result = await myPromise
            .then((result) => result + ' Passando pelo then')
            .then((result) => result + ' acabouu!')
        } 
        catch(err) {
            result = err.message; 
        }

        return result;
}
