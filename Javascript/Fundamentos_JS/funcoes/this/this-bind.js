/*
This - Bind

Clona a estrutura da função
onde é chamada e aplica o
valor do objeto passado
como parâmetro
*/

const retornaNomes = function() {
    return this.nome;
};

let rafael = retornaNomes.bind({ nome: 'Rafael' });

rafael();
// Rafael