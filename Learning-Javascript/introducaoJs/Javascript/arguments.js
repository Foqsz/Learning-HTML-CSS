// Função que soma todos os elementos de um array
function somar(arr){
    let result = 0;

    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

console.log(somar([1,2,3,4,5])); 

function somarTypeTwo(){
    console.log(arguments);
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(somarTypeTwo(1,2,3,4,5,6,7,8,9,10));