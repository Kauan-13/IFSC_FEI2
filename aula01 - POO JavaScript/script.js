// 1.

function carro(ano, modelo, marca) {
    let c = Object.create(carro.prototipo);
    c.ano = ano;
    c.modelo = modelo;
    c.marca = marca;
    return c;
}

carro.prototipo = {
    andar: function() {
        console.log("vrum! vrum!");
    },
    buzinar: function() {
        console.log("bi-bi!");
    },
    virar: function(direcao) {
        console.log(`o carro virou para ${direcao}`);
    }
}

let carrao = carro(2014, "Gol bolinha", "Volks");

carrao.andar();
carrao.buzinar();
carrao.virar("direita");

// 2.

function Animal(tipo, nome, som) {
    this.tipo = tipo;
    this.nome = nome;
    this.som = som;
}

Animal.prototype = {
    emitirSom() {
        console.log(`O ${this.tipo} faz ${this.som}`);
    },
    locomover() {
        console.log(`O ${this.nome} se locomove`);
    },
    comer() {
        console.log(`O ${this.nome} come`);
    }
}

let bixao = new Animal("Gachorro", "Princesa", "Miau-au");
bixao.emitirSom();
bixao.locomover();
bixao.comer();

// 3.

class Livro {

    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    emprestar() {
        console.log(`O livro "${this.titulo}" foi empretado!`);
    }
    devolver() {
        console.log(`O livro "${this.titulo}" foi devolvido!`);
    }
}

let livrao = new Livro("Dom Casmurro", "Machado de Assis", "1899");

livrao.emprestar();
livrao.devolver();