/*
Default Exports

Só pode haver um arquivo;
Será o retorno padrão do seu arquivo
*/

function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
};

function monstraCidade(pessoa) {
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
};

function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`
};

export {
    mostraIdade,
    monstraCidade
};

export default mostraHobby;