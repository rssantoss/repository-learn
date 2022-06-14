/*
Condicionais a partir de parâmetros
*/

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'Gerente' | 'Coordenador' | 'Supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if('cargo' in usuario) {
        // Redireciona para a área de administração
    }

    // Redireciona para a área do usuário
}
/*
Utilizando o caracter "?"

Poderia ser um usuário externo. Dessa forma a "?" 
faz o papel de transformar em um dado opicional
*/
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'Gerente' | 'Coordenador' | 'Supervisor' | 'Funcionario';
}

function redirecione(usuario: IUsuario) {
    if(usuario.cargo) {
        // redirecionar(usuario.cargo);
    }

    // redirecionar para a área do usuário
}
