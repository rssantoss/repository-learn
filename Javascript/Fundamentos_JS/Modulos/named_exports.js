/*
Módulos - Export

Módulos arquivos Javascript que 
tem a capacidade de exportar e 
importar informações de outros
arquivos do mesmo tipo

Vantagens:
- Organização do código;
- Compartilhamento de variáveis
em escopos diferentes;
- Explicita as dependências
dos arquivos
*/

// Named Exports
export function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
};

export function monstraCidade(pessoa) {
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
};

export function mostraHobby(pessoa) {
    return `A hobby de ${pessoa.nome} é ${pessoa.hobby}`
};

// OU
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
    monstraCidade,
    mostraHobby
};
