//Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.

let min = 1
let max = 100
let resposta = ""
let palpite = 0

while (resposta !== "correto") {
    palpite = Math.floor((min + max) / 2)
    
    resposta = prompt(`
        O número é ${palpite}?
        (Digite maior, menor ou correto)`)

    if (resposta === "maior") {
        min = palpite + 1
    }

    else if (resposta === 'menor') {
        max = palpite - 1
    }

}

alert("Acertei!")