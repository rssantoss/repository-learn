/*
Objetos
Object Destructuring

Entre chaves {} podemos
filtrar apenas os dados
que nos interessam em um
objeto
*/

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user)
// 42

getFullName(user)
// John Doe