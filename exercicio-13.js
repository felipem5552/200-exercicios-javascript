// Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem 
// indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa. (peso/(altura x altura))

let peso = parseFloat(prompt(`Calculador de IMC:
Por favor, digite o seu peso em KG:`))

let altura = parseFloat(prompt(`Calculador de IMC:
Peso informado: ${peso}kg
Por favor, digite sua altura em metros utilizando o ponto para separar o decimal:`))

let imc = peso / (altura * altura)

if (peso <= 0) {
  alert("Digite um peso válido ❌")
} 

else if (altura <= 0) {
  alert("Digite uma altura válida ❌")
} 

else if (imc < 18.5) {
  alert("Seu IMC é " + imc + ". Você está abaixo do peso.")
} 

else if (imc < 25) {
  alert("Seu IMC é " + imc + ". Você está com peso normal.")
} 

else if (imc < 30) {
  alert("Seu IMC é " + imc + ". Você está com sobrepeso.")
} 

else {
  alert("Seu IMC é " + imc + ". Você está obeso.")
}
