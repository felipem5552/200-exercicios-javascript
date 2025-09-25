//Exercício 5: Declare duas variáveis e atribua valores numéricos a elas. 
// Use o operador de adição para realizar operações entre as duas variáveis. Imprima o resultado.

let a = parseFloat(prompt(`Teste de Código - Soma entre dois números

Digite o primeiro número da soma: `)) || 0
let b = parseFloat(prompt(`Teste de Código - Soma entre dois números

Digite o segundo número da soma: `)) || 0


alert(`O resultado da soma entre ${a} e ${b} é:
                        
                         ${a+b}         `)