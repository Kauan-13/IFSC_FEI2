interface Stack<T> {
    push(item: T): void,
    pop(): T | undefined,
    size(): number,
    empty(): boolean
}

class Pilha<T> implements Stack<T>{
    private area: T[] = [];
    
    push(algo: T) {
        this.area.push(algo);
    }

    pop(): T | undefined{
        return this.area.pop();
    }

    size(): number {
        return this.area.length;
    }

    empty(): boolean {
        return this.area.length == 0;
    }
}

let pilha = new Pilha<number>();

console.log(pilha.empty());

pilha.push(1);

pilha.push(2);

console.log(pilha.size());

console.log(pilha.empty())

console.log(pilha.pop());