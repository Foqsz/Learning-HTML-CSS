let numeros = [1, 2, 3, 4, 5, 4, 44, 2, 1, 3, 4, 5, "João", "Maria", "João"];
let numerosUnicos = numeros.reduce(function(numerosUnicos, numeroAtual)
{
    if(numerosUnicos.indexOf(numeroAtual) === -1)
        numerosUnicos.push(numeroAtual);
    return numerosUnicos;
}, []);
console.log("Números únicos:", numerosUnicos); // [1, 2, 3, 4, 5]