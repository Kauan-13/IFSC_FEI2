// 1.
var animais = ['cachorro', 'gato', 'lesma'];
var outroPrimeiro = function (array) { return array[0]; };
var primeiroElemento = function (arr) { return arr[0]; };
console.log(outroPrimeiro(animais));
var exibir = function (a) {
    if (typeof a === 'string') {
        return a + " é uma string";
    }
    else {
        return a + " é um number";
    }
};
console.log(exibir("oba"));
console.log(exibir(2));
var soma = function (a, b) {
    return a + b;
};
console.log(soma(10, 5));
console.log(soma("Kauan é", " programador"));
