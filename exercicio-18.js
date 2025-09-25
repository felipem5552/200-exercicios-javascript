//Exercício 18: Verifique se uma pessoa pode dirigir com base na idade.

let idade = parseInt(prompt("Digite sua idade para saber se você pode dirigir:"));


if (idade >= 18) {
    alert(`Parabéns! Com ${idade} anos você pode dirigir`)
} 
else {
   alert(`Com ${idade} anos você NÃO pode dirigir`)
}
