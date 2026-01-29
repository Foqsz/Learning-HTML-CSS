function Cachorro(name){
    let posicao = 0;

    this.nome = name;

    this.latir = function(){
        console.log(this.nome + " diz: Au Au!");
    }

    this.andar = function(distancia){
        posicao += distancia;
        console.log(this.nome + " andou " + distancia + " metros.");
    }
}

const rex = new Cachorro("Rexx");
rex.latir();
rex.andar(10);
rex.andar(5); 