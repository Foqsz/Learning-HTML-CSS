let array = [1, 2, 3, 4, 5];

// Usando reverse para inverter a ordem dos elementos
let reversedArray = array.reverse();
console.log("Array invertido:", reversedArray); // [5, 4, 3, 2, 1]
console.log("Array original após reverse:", array); // [5, 4, 3, 2, 1]

// Usando reduce para somar todos os elementos do array
let sum = array.reduce(function(accumulator, currentValue, i, _array) 
{
    console.log("Índice atual:", i);
    console.log("Array atual:", _array);
    console.log("Acumulador:", accumulator, "----", "Valor atual:", currentValue);
    return accumulator + currentValue;
}, 0);
console.log("Soma dos elementos do array:", sum); // 15

// Usando reduce para contar a quantidade de nomes que começam com cada letra
let nomes = ["Ana", "Bia", "João", "Carlos"];
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual)
{
    let primeiraLetra = nomeAtual.charAt(0);
    if(nomes[primeiraLetra])
        nomes[primeiraLetra]++;
    else
        nomes[primeiraLetra] = 1;
    return nomes;
}, {});
console.log("Nomes por ordem alfabética:", nomesPorOrdem); // { A: 1, B: 1, C: 1 }