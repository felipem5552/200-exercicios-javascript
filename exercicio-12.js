// Exercício 12: Verifique a situação de um estudante de acordo com sua média final.

let media = parseFloat(prompt(`Consulta de média escolar:
Digite a sua média para status de aprovação final:`)) 

if (media >= 7) {
  alert("Parabéns aluno! Você foi aprovado ✅")
} 
else if (media >= 5) {
  alert("Sua média não foi suficiente para ser aprovado, porém elegível para recuperação ⚠️")
} 
else if (media >= 0) {
  alert("Infelizmente você foi reprovado ❌")
} 
else {
  alert("Digite uma nota válida ❌")
}
