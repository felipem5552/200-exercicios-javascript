//Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

let opjogador = ""
let opcomputador = ""

alert("Seja bem-vindo ao: Pedra / Papel / Tesoura vs Computador")

do {
  opjogador = Number(prompt(`Digite o número referente a opção escolhida:
1. Pedra
2. Papel
3. Tesoura
4. Sair do Jogo`))

  
  if (opjogador === 4) {
    alert("Saindo do jogo. Até mais!")
    break
  }

  opcomputador = Math.floor(Math.random() * 3) + 1

  if (opjogador === opcomputador) {
    alert(`Empate! O computador também escolheu ${opcomputador}`)
  } else if (
    (opjogador === 1 && opcomputador === 3) ||
    (opjogador === 2 && opcomputador === 1) ||
    (opjogador === 3 && opcomputador === 2)
  ) {
    alert(`Parabéns, você venceu! O computador escolheu ${opcomputador}`)
  } else {
    alert(`Você perdeu! O computador escolheu ${opcomputador}`)
  }


} while (confirm("Quer jogar novamente?"))
