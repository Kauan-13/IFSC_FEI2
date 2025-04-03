// 1. Escreva uma função pura que recebe um array de números e retorna um novo array
// contendo os quadrados dos números, sem modificar o array original.
// ■ utilize programação imperativa
// ■ refatore para programação funcional

let numeros = [1,2,3,4,5,6,7];

function quadradoImp(params) {
    let numerosQuadrados = [];
    for (let i = 0; i < numeros.length; i++) {
        numerosQuadrados[i].push(array[i] ** 2); 
    }
    
    return numerosQuadrados;
}

const quadradoFunc= (valores) => {
    return valores.map(x => x ** 2);
}

// 2. Implemente uma função pura que recebe uma lista de objetos representando
// produtos (com nome e preço) e retorna um novo array com o preço de cada produto
// aumentado em 10%, sem alterar o array original.

const produtos = [
    {
        nome: "sabonete",
        preco: 3
    },
    {
        nome: "detergente",
        preco: 5
    },
    {
        nome: "picanha",
        preco: 90
    }
]

const aumentaPreco = (items) => {
    return items.map(item => {
        return { 
            nome: item.nome,
            preco: (item.preco * 1.1).toFixed(2)
        }
    })
}

// 3. Usando reduce, crie uma função que receba um array de números e retorne o maior
// elemento.

const maiorElemento = array => array.reduce((maior, numero) => numero > maior ? numero : maior);