/*
Switch - Case

É uma estrutura de condição que 
define o código a ser executado 
com base em uma comparação de 
valores;
Sempre precisa de um valor
default;
Ideal para quando se precisa
comparar muitos valores
*/

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1) // cão
getAnimal(3) // pássaro
getAnimal(2) // gato
getAnimal("1") // peixe
getAnimal(4) // peixe