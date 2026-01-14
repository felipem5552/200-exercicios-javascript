let numero = 1
let soma = 0

do {
  soma += numero ** 3
  numero++
} while (numero <= 10)

console.log("A soma dos cubos dos 10 primeiros números naturais é:", soma)
