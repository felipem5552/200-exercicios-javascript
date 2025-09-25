//Exercício 23: Escreva um programa que verifica as cores de um semáforo.

let cor = prompt(`Selecione a cor do semáforo:

1. Vermelho 
2. Amarelo
3. Verde

Digite o número referente opção selecionada:`)

switch (cor) {
    case "1":
        alert("Pare!🛑")
        break
    case "2":
        alert("Atenção!⚠️")
        break
    case "3":
        alert("Siga!🟢")
        break
    default:
        alert("Cor inválida!")
}
