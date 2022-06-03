/*
Coleção - Map

Uma coleção de arrays
no formato [chave, valor];

Pode ser iterado por um
loop for...of
*/

const myMap = new Map();

/*
Métodos - Map

Adicionar, ler e deletar
*/
myMap.set('laranja', 'fruta');
// Map(1) {'laranja' => 'fruta'}

myMap.get("laranja");
// "fruta"

myMap.delete("laranja");
// true

myMap.get("laranja");
// undefined

/*
Observações

O Map pode ter suas chaves de 
qualquer tipo;

Maps são mais fáceis de iterar;

Maps possuem a propriedade Length;

Utilizado quando o valor das 
chaves é desconhecido;

Os valores tem o mesmo tipo
*/