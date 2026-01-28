function semArrow(str){
    console.log('Sou uma função sem arrow e recebo:', str)
    return "sem arrow";
}

console.log(semArrow("teste"));

const comArrow = (str, str2) => "com arrow" + str + " " + str2;

console.log(comArrow("teste", "teste2"));


const arrowComObjeto = () => ({nome: "Objeto retornado"});

console.log(arrowComObjeto());