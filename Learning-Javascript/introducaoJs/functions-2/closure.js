const teste = (function(n) {
    return function testeInternal(){
        console.log("Função interna executada", ++n);
        return "Retorno da função interna" + n;
    }
})(10);

let str = teste();
teste();
console.log(teste()); 
console.log(str);