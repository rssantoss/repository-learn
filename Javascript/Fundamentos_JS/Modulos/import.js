/*
Importar os arquivos
*/

// Named Exports
import {funcao, variavel, classe} from './arquivo.js';

// Default Exports
import valorDefault from './arquivo.js';

// Trocando nome de imports
import { arquivo as Apelido } from './arquivo.js';
Apelido.netodo();

/* 
Importando todos os
dados de um arquivo
*/
import * as INFOS from './arquivo.js';
INFOS.metodoA();
console.log(INFOS.variavel);
