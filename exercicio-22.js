//Exercício 22: Escreva um programa que determina o número de dias em um mês. 

let mes = prompt(`Escolha um mês para verificar o número de dias que ele possui:
1. Janeiro
2. Fevereiro
3. Março
4. Abril
5. Maio
6. Junho
7. Julho
8. Agosto
9. Setembro
10. Outubro
11. Novembro
12. Dezembro

Digite o número referente a opção escolhida:`)

switch (mes) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        alert("O mês selecionado possui 31 dias")
        break
    
    case "4":
    case "6":
    case "9":
    case "11":
        alert("O mês selecionado possui 30 dias")
        break

    case "2":
        alert("o mês selecionado possui 28 dias, mas 29 dias em anos bissextos")
        break
       
    
    default:
        alert("Opção não identificada")

}