function calcularAreaQuadrado(n1, n2){
    if(n1 === undefined || n2 === undefined){ 
        throw new Error("É necessário fornecer dois números para calcular a área do quadrado.");      
    }
    return n1 * n2; 
}

function calcularAreaRetangulo(n1, n2){
    if(n1 === undefined || n2 === undefined){ 
        throw new Error("É necessário fornecer dois números para calcular a área do retângulo.");      
    }
    return n1 * n2;
}   

function calcularAreaTriangulo(n1, n2){
    if(n1 === undefined || n2 === undefined){ 
        throw new Error("É necessário fornecer dois números para calcular a área do triângulo.");      
    }
    return (n1 * n2) / 2;
}