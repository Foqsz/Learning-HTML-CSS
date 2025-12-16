function calcularMedia(n1, n2){
    const result = (Number(n1) + Number(n2)) / 2; 
    resultado.innerHTML = "A média é: " + result;
    return result;
}

(function(){
    function media(){
        let total = 0;
        let qtd = arguments.length;
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] === 'number'){
                total += arguments[i];
            }
            else{
                throw new Error('Apenas números são permitidos');
            }
        }
        return total / qtd;
    }

    let media1 = media(10, 10);
    console.log(media1);
})();