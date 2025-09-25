//Exercício 17: Escreva um programa que determina se um número é par ou ímpar.

let num = parseInt(prompt(`Vou determinar se o número digitado é par ou impar. 
Digite o número, por favor:`))

if (num % 2 === 0) {
    alert(`O número ${num} é par.`)
}
else alert(`O número ${num} é ímpar.`)