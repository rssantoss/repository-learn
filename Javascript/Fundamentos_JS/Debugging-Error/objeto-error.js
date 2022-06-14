/*
Objeto Error


*/

new Error(message, fileName, lineNumber)
// Todos os parâmetros são opicionais


const MeuErro = new Error('Mensagem Inválida');
throw MeuErro;
/*
Uncaught Error: Mensagem Inválida
    at <anonymous>:1:17
(anonymous) @ VM115:1
*/

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;
/*
Uncaught InvalidMessage: Mensagem Inválida
    at <anonymous>:1:17
(anonymous) @ VM119:1
*/