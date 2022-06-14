/*
Type

Usado para junção de interfaces; 

Pode definir que uma variável 
pode ser uma interface ou outra 
interface.
*/

interface IAnimal {
    nome: string;
    tipo: 'Aquático' | 'Terrestre';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'Pequeno' | 'Medio' | 'Grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'Cachorro',
    porte: 'Medio',
    tipo: 'Terrestre',
    visaoNoturna: true
}

