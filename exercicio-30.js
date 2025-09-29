//Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.

for (let n = 2; n <= 100; n++) { 
   
   let primo = true

   for (let divisor = 2; divisor < n; divisor++) { 
      
      if (n % divisor === 0) {
         primo = false
         break
      }
   }
   
   if (primo) { 
      console.log(n); 
   }
}