/*
This

A palavra reservada this
é uma referência de contexto

No exemplo, this está se referindo
ao objeto pessoa
*/

/* Sempre que uma função está
dentro de um objeto, é chamada
de método
*/
const pessoa = {
    firstName: "Rafael",
    lastName: "Silva",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName; // Quando se utiliza this dentro de um método, 
    },                                               // irá se referir ao objeto pai desse método
    getId: function() {
        return this.id;
    }
};
// É possível fazer isso com todas 
// as ´propriedades´ do objeto

pessoa.fullName();
// "Rafael Silva"

pessoa.getId();
// 1