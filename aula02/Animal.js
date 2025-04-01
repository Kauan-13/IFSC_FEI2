class Animal {
    
    #tipo;
    #nome;
    #som;

    constructor(tipo, nome, som) {
        if (new.target === Animal) {
            throw new Error("A classe animal é abstrata e não pode ser instaciada");
        }
        this.#tipo = tipo;
        this.#nome = nome;
        this.#som = som;
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(tipo) {
        if (typeof tipo !== 'string') {
            throw new Error("Paramentro passado diferente de string");
        } else {
            this.#tipo = tipo;
        }
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        if (typeof nome !== 'string') {
            throw new Error("Paramentro passado diferente de string");
        } else {
            this.#nome = nome;
        }
    }
    
    get som() {
        return this.#som;
    }

    set som(som) {
        if (typeof som !== 'string') {
            throw new Error("Paramentro passado diferente de string");
        } else {
            this.#som = som;
        }
    }

    emitirSom() {
        throw new Error('Método não implementado');
    }

    locomover() {
        throw new Error('Método não implementado');
    }

    comer() {
        throw new Error('Método não implementado');
    }

    informarTipo() {
        throw new Error('Método não implementado');
    }

    static #quantidadeAnimais = 0;

    static getQuantidadeAnimais() {
        return Animal.#quantidadeAnimais;
    }

    static incrementaAnimal() {
        this.#quantidadeAnimais++;
    }
}

class Raposa extends Animal {
    constructor(nome) {
        super();
        this.tipo = "Raposa";
        this.nome = nome;
        this.som = "regolga";
        Animal.incrementaAnimal();
    }

    emitirSom() {
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    }

    locomover() {
        console.log(`${this.nome} correu`);
    }

    comer() {
        console.log(`${this.nome} comeu uma galinha`);
    }

    informarTipo() {
        console.log(`${this.nome} é ${this.tipo}`);
    }
}

class Guaxinim extends Animal {
    constructor(nome) {
        super();
        this.tipo = "Guaxinim";
        this.nome = nome;
        this.som = "zube";
        Animal.incrementaAnimal();
    }

    emitirSom() {
        console.log("zummmmmmmmmmmmmmm!");
    }

    locomover() {
        console.log(`${this.nome} subiu na arvore`);
    }

    comer() {
        console.log(`${this.nome} comeu uma banana`);
    }

    informarTipo() {
        console.log(`${this.nome} é ${this.tipo}`);
    }
}

class Capivara extends Animal{
    constructor(nome) {
        super();
        this.tipo = "Capivara";
        this.nome = nome;
        this.som = "assobia";
        Animal.incrementaAnimal();
    }

    emitirSom() {
        console.log("fiu-fiu!");
    }

    locomover() {
        console.log(`${this.nome} nadou`);
    }

    comer() {
        console.log(`${this.nome} comeu grama`);
    }

    informarTipo() {
        console.log(`${this.nome} é ${this.tipo}`);
    }
}

let raposa = new Raposa("Naruto");
let guaxinim = new Guaxinim("Antunes");
let capivara = new Capivara("Roberto");

raposa.emitirSom();
guaxinim.comer();
capivara.locomover();

console.log(Raposa.getQuantidadeAnimais());