function criarCachorro(nome){
    let posicao = 0;
    return {
        nome,
        latir(){
            console.log(this.nome + " diz: Au Au!");
        },
        andar(distancia){
            posicao += distancia;
            console.log(this.nome + " andou " + distancia + " metros.");
        },
        pegaPosicao(){
            return posicao;
        }
    }
}

const rex = criarCachorro("Rex");
rex.andar(10);
rex.andar(5);
rex.pegaPosicao();
console.log(rex.pegaPosicao());

const bolinha = criarCachorro("Bolinha");
bolinha.latir();
bolinha.andar(3);
console.log(bolinha.pegaPosicao());
