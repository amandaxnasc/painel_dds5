const propriedades = [
    'data',
    'data_hora_inicio',
    'data_hora_fim',
    'turma',
    'instrutor',
    'unidade_curricular',
    'ambiente'
];

// export function hasProperty(aula){
//     return propriedades.every(prop=>aula.hasProperty(prop));
// }

 export function isNullOEmpty(valor){
    return valor === null || valor === '' || valor === undefined;
}

export function verificaAula(aula){
    return propriedades.some(prop=>isNullOEmpty(aula[prop]));
}