export default function somar (...args){
    if(args.length === 0){
        throw new Error("Nenhum argumento foi passado");
    }

    if(args.some(n => typeof n !== 'number' || Number.isNaN(n))){
        throw new Error("Todos os argumentos devem ser números válidos");
    }

    return args.reduce((total, atual) => total + atual, 0);
}

function fnInternal(){
    console.log("Função interna do módulo soma.js");
}