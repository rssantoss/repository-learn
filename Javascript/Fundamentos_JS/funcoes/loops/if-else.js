// Condições if-else

function numeroPositivo() {
    let resultado;

    if(num < 0) { //condição
        resultado = false; //ocorre caso a condição seja atendida
    } else {
        resultado = true; //ocorre caso a condição anterior não seja atendida
    }

    return resultado;
}

numeroPositivo(9)
// true

numeroPositivo(-8)
// false

// Exemplo 2
function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }

    return true;
}

// Exemplo 3
// JavaScript não possui elseif, as palavras sempre estão espaçadas
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo!";
}
