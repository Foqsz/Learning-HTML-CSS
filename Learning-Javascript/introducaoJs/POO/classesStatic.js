class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    // método de instância
    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    // método estático (da classe)
    static especie() {
        return "Canis familiaris";
    }
}

const meuDog = new Cachorro("Rex");

meuDog.comer();                // ✅ Rex está comendo
console.log(Cachorro.especie());         // ✅ método estático


class Calculadora {
    static somar(a, b) {
        return a + b;
    }
}

console.log(Calculadora.somar(2, 3)); // 5