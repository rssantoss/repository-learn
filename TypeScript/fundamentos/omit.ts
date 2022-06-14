/*
Omit
*/
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

// Irá omitir a nacionalidade
interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {

}