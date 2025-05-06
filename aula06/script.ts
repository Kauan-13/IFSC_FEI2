// 1.
let animais: string[] = ['cachorro', 'gato', 'lesma'];

const outroPrimeiro = <T>(array: T[]): T => array[0];

const primeiroElemento = (arr: any[]): any => arr[0];

console.log(outroPrimeiro(animais));

// 2.
type Mensagem = {
    (a: number): string;
    (a: string): string;
}

const exibir: Mensagem = (a: any) => {
    if (typeof a === 'string') {
        return a + " é uma string";       
    } else {
        return a + " é um number";
    }
}

console.log(exibir("oba"));
console.log(exibir(2));

//3.
type SomaJunta = {
    (a: number, b: number): number;
    (a: string, b: string): string;
}

const soma: SomaJunta = (a: any, b: any) => {
    return a + b;
}

console.log(soma(10, 5));
console.log(soma("Kauan é", " programador"));

