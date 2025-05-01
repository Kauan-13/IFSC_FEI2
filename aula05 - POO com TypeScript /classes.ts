enum TipoAnimal {
    CACHORRO = 'cachorro',
    GATO = 'gato',
    RAPOSA = 'raposa',
    GUAXINIM = 'guaxinim',
    CAPIVARA = 'capivara'
}

abstract class Animal {
    
    constructor(
        private _tipo: TipoAnimal,
        private readonly _nome: string,
        private _som: string
    ) {}

    get tipo(): TipoAnimal {
        return this._tipo;
    }

    set tipo(tipo: TipoAnimal) {
        this._tipo = tipo;
    }

    get nome(): string {
        return this._nome;
    }

    get som() {
        return this._som;
    }

    set som(som: string) {
        this._som = som;
    }

    abstract emitirSom(): void;

    abstract locomover(): void;

    abstract comer(): void;

    abstract informarTipo(): void;

    private static quantidadeAnimais = 0;

    static getQuantidadeAnimais(): number {
        return this.quantidadeAnimais;
    }

    static incrementa() {
        this.quantidadeAnimais++;
    }
}

class Raposa extends Animal {

    constructor(nome: string) {
        super(TipoAnimal.RAPOSA, nome, 'regolga');
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
        super(TipoAnimal.CAPIVARA, nome, "zube");
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
        super(TipoAnimal.CAPIVARA, nome, "assobia");
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

let raposa = new Raposa("José");

raposa.comer();
raposa.emitirSom();
raposa.comer();
raposa.informarTipo();