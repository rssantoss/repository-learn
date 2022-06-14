/*
Interface

Usado para fazer contratos
*/

interface IAnimal {
    nome: string;
    tipo: 'Aquático' | 'Terrestre';
}
// É possível estender a interface
// Criar uma classe filha de outra classe

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Cachorro',
    tipo: 'Amigo' // Type '"Amigo"' is not assignable to type '"Aquático" | "Terrestre"'.
}

const animal2: IAnimal = {
    nome: 'Cachorro',
    tipo: 'Terrestre' 
}
// Não é possível colocar um valor diferente dos definidos na interface

const felino: IFelino = {
    nome: 'Gato',
    tipo: 'Terrestre',
    visaoNoturna: true
}