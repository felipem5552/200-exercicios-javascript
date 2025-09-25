//Exercício 10: Escreva um programa que recebe duas notas de um aluno, calcula a média e 
// imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

let n1 = parseFloat(prompt(`Consultor de Médias Escolares
Olá aluno! Digite sua primeira nota:

1° Nota = Aguardando...
2° Nota = Aguardando...
`)) || 0

let n2 = parseFloat(prompt(`Consultor de Médias Escolares
Olá aluno! Digite sua segunda nota:

1° Nota = ${n1}
2° Nota = Aguardando...
`)) || 0

let media = (n1 + n2) / 2

if (media >= 7) {
    alert(`Parabéns, você foi aprovado com ${media}`)
}
else
    alert (`Infelizmente você foi reprovado, sua média foi ${media}`)
