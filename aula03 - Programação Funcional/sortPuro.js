let numeros = [5,4,3,2,1];

console.log(numeros);

const sort = (a, ...args) => {
    const b = [...a];
    return b.sort(...args);
}

const funcaoOrdenacao = (a, b) => a - b;

const numerosOrdenados = sort(numeros, funcaoOrdenacao);

console.log(numeros);
console.log(numerosOrdenados);