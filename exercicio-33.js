//Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

let anterior = 0
let atual = 1

console.log(anterior)
console.log(atual)

for (let i = 3; i <= 10; i++) {
    
    let proximo = anterior + atual
    
    console.log(proximo)
    
    anterior = atual
    atual = proximo
}

