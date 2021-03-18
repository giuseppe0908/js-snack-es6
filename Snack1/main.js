// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le
// seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore
// utilizzando destructuring e template literal
$(document).ready(function() {

  const bikes = [];

   bikes.push({
     nome: "bmx",
     peso: 30
   });
   bikes.push({
     nome: "graziella",
     peso: 1
   });
   bikes.push({
     nome: "bici",
     peso: 4
   });

   let index = 0;
   let min = bikes[0].peso ;
   for (let i = 1; i < bikes.length; i++) {
       if (bikes[i].peso < min) {
         const{peso} = bikes[i];
         min = peso;
         index = i;

       }
   }


    console.log(`la bici che pesa di meno è:${bikes[index].nome}. Il suo peso è ${min}`);

})
