//Exercício 14: Escreva um programa que verifica se um ano é bissexto.

let ano = parseInt(prompt("Digite um ano para verificar se ele é bissexto:"))

if (ano % 400 === 0) {
   alert(ano + " é um ano bissexto!")
} 
else if (ano % 100 === 0) {
    alert(ano + " não é um ano bissexto!")
} 
else if (ano % 4 === 0) {
    alert(ano + " é um ano bissexto!")
} 
else {
    alert(ano + " não é um ano bissexto!")
}

