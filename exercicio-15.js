//Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.
//OBS: Um palíndromo é uma palavra, frase, número ou sequência que se lê da mesma forma de trás para a frente

let palavra = prompt("Digite uma palavra para saber se é palíndromo ou não:")

let ifpalindromo = true

for (let i = 0; i < palavra.length / 2; i++) {
    let letracomeco = palavra[i]
    let letrafim = palavra[palavra.length - 1 - i]
  
 
  if (letracomeco !== letrafim) {
    ifpalindromo = false
    break
  }
}


if (ifpalindromo) {
  alert("A palavra '" + palavra + "' É um palíndromo")
} else 
  alert("A palavra '" + palavra + "' Não é um palíndromo")

