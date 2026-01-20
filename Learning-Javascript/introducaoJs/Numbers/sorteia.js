function getRandomNumber(inicio = 0, fim = 10, integer = true){
    min = Math.ceil(inicio);
    max = Math.floor(fim);
    let numRandom = Math.random() * (max - min) + min;

    return integer ? Math.floor(Math.random() * (max - min + 1) + min) : numRandom;
    
}

console.log("COM TRUE", getRandomNumber(2, 5, true))
console.log("SEM TRUE", getRandomNumber(2, 5, false))