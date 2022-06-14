/*
Generic Types
*/

// 'T' quando não sei o tipo (Genérico)
function adicionaApendiceALista<T>(array: any[], valor: T) {
    return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 3], 1);
