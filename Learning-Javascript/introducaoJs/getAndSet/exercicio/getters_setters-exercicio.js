class Produto {
    #itensEstoque;
    #contador; 

    constructor(nome, itensEstoque){
        this.nome = nome;
        this.#contador = 0;
        this.#itensEstoque = (typeof itensEstoque === "number" && itensEstoque > 0) ? itensEstoque : 0;
    }

    get itensEstoque(){
        console.log(`Compras realizadas com sucesso de ${this.nome}: ${this.#contador}`)
        return this.#itensEstoque;
    }

    comprar(quantidade){
        if(typeof quantidade !== "number" || quantidade <= 0)
        {
            console.log("Quantidade inválida");
            return;
        }
        if(quantidade > this.#itensEstoque)
        {
            console.log("Estoque insuficiente")
            return;
        }

        this.#contador++;
        this.#itensEstoque -= quantidade;
    }

    adicionarEstoque(quantidade){
        if(typeof quantidade === "number" && quantidade > 0)
        {
            this.#itensEstoque += quantidade;
        }
        else{
            console.log("Quantidade invalida")
        }
    }
}

const caneta = new Produto("caneta")
const camiseta = new Produto("Camiseta", 10)

console.log(caneta)
console.log(camiseta)

caneta.adicionarEstoque(220);
caneta.comprar(25);
caneta.comprar(5);
console.log(caneta.itensEstoque);

camiseta.comprar(2);
camiseta.comprar(3);
camiseta.adicionarEstoque(10);
console.log(camiseta.itensEstoque);