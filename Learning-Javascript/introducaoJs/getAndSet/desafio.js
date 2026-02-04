class Carrinho{
    #itens
    constructor(){
        this.#itens = [];
    }

    get itens(){
        return [...this.#itens]
    }

    adicionarItem(nomeProduto){
        if(typeof nomeProduto === "string")
            this.#itens.push(nomeProduto.toLowerCase());
        else    
            return "Apenas itens são permitidos."
    }

    removerItem(nomeProduto){
        if(this.#itens.includes(nomeProduto)){
            const indice = this.#obterIndice(nomeProduto);
            this.#itens.splice(indice, 1);      
        }
        else{
            return "Item não localizado no carrinho";
        }
    }

    #obterIndice(nome){
        return this.#itens.indexOf(nome.toLowerCase());
    }
}

const carrinho = new Carrinho();

carrinho.adicionarItem("Sabão")
carrinho.adicionarItem("Esponja")
carrinho.adicionarItem("Detergente")
console.log(carrinho.adicionarItem(123))
console.log(carrinho.itens);
console.log(carrinho.removerItem("Prato"))
carrinho.removerItem("sabão");
console.log(carrinho.itens);
const ref = carrinho.itens;
console.log(ref);
ref.push("Colher");
console.log(carrinho.itens);
ref.length = 0;
console.log(carrinho.itens);