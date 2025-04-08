// 1. Dado um array que pode conter números e subarrays, implemente uma função
// recursiva que percorra o array e retorne a soma de todos os números. Não utilize loops.

let array = [1, 2, [3, 4], 5, [[6, 7], 8], 9]

function somaArrayAninhado(arr) {
    // let resultado = 0;
    
    // for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //         resultado += somaArrayAninhado(arr[i]);
    //     } else if (typeof arr[i] === 'number') {
    //         resultado += arr[i];
    //     }
    // }
    
    // return resultado;
 
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc + somaArrayAninhado(item);
        } else if (typeof item === 'number') {
            return acc + item;
        }
    }, 0)
}

console.log(somaArrayAninhado(array));

// 2. Crie uma função que receba duas funções como argumento e retorne uma nova
// função que é a composição das duas.

function composicao(f, g) {
    return function (x) {
        return f(g(x));
    }
}

function dobro(x) {
    return x*2;
}

function quadrado(x) {
    return x ** 2;
}

let dobroDoQuadrado = composicao(dobro, quadrado);

console.log(dobroDoQuadrado(3));

// 3. Implemente uma função que gera uma sequência numérica crescente com base em um
// número inicial e um passo, ambos passados como parâmetros. Use closures para manter
// o estado da sequência.

function gerarSequencia(inicio, passo) {
    let valor = inicio - passo;

    return function () {
        valor += passo;
        return valor;
    }
}

let sequencia = gerarSequencia(10,5);

for (let i = 0; i < 10; i++) {
    console.log(sequencia());
}

// 4. Crie uma função que aceite um número e retorne uma nova função que também aceita
// um número. O produto dos dois números deve ser retornado.

function multiplicar(x) {
    return function (y) {
        return x * y;
    }
}

let multiplicarPorDez = multiplicar(10);

console.log(multiplicarPorDez(3));

// 5. Escreva uma função recursiva que percorra todos os elementos do DOM e retorne
// uma lista com os textos de todos os elementos <p>. Não utilize loops.

function percorrerDOM(elemento) {
    let textos = [];

    if (elemento.tagName.toLowerCase() === 'p'){
        textos = textos.concat(elemento.textContent());
    }

    let filhos = elemento.children;

    for (let i = 0; i < filhos.length; i++) {
        textos.push(percorrerDOM(filhos[i]));
    }
}