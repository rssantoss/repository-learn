/*
Fetch - Consumindo APIs

É preciso utilizar o Await
*/

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
// retorna uma Promise

/*
Operações no banco
(POST, GET, PUT, DELETE, etc)
*/
// GET
fetch('https://api-endereco.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))
// retorna uma Promise

// POST
fetch('https://api-endereco.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))
// retorna uma Promise
