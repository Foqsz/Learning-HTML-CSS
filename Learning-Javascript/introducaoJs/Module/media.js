import _somar from './somar.js';

export function media(...args){
    const total = _somar(...args); // Usando a função somar do módulo soma.js
    return total / args.length;
}

export function teste(){
    console.log("Função teste do módulo media.js");
}

export const IP = "21.12112.1"

function somarz(){
    console.log("Função interna do módulo media.js");
}