//Exercício 20: Imprima uma classificação baseada na nota de um aluno.

let nota = parseFloat(prompt("Olá Aluno(a). Digite sua nota para prosseguir com a avaliação:"))

if( nota >= 7) {
  alert("Parabéns, você foi aprovado!")
}
else if( nota >= 5) {
  alert("Você está de recuperação, continue se esforçando!")
}
else {
  alert("Infelizmente você foi reprovado!")
}

