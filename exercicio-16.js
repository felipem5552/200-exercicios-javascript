//Exercício 16: Escreva um programa que determina o maior entre três números.

let a = parseInt(prompt(`Digite três numeros e direi qual o maior dos três:
1° Número: ...`))

let b = parseInt(prompt(`Digite três numeros e direi qual o maior dos três:
1° Número: ${a}
2° Número: ...`))

let c = parseInt(prompt(`Digite três numeros e direi qual o maior dos três:
1° Número: ${a}
2° Número: ${b}
3° Número: ...`))

if (a > b && a > c) {
    alert(`O maior número é ${a}`)
}

if (b > a && b > c) {
    alert(`O maior número é ${b}`)
}

if (c > a && c > b) {
    alert(`O maior número é ${c}`)
}