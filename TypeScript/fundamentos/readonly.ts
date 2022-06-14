/*
Readonly
*/
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorooSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K]; // Remover valores opcionais '-?'
} // '+' Adicionando o readonly
 
class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const cao = new MeuCachorro('Rodolfo', 14);
