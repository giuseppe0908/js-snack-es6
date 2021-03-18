// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse
// proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà
// da compilare, le altre saranno tutte settate a 0. Generare numeri random
// al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando
//  la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi
// e falli subiti e stampiamo tutto in console.
$(document).ready(function() {
  // Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse
  // proprietà: nome, punti fatti, falli subiti.
  const squadre = [
    {
     nome: "Inter",
     punti: 0,
     falli: 0
    },
    {
     nome: "Barcellona",
     punti: 0,
     falli: 0
    },
    {
     nome: "Ajax",
     punti: 0,
     falli: 0
    },
    {
     nome: "Atalanta",
     punti: 0,
     falli: 0
    },
   ];

  const newteam = [];
  // const nuovasquadra = [];
   for (let i = 0; i < squadre.length; i++) {
     squadre[i].punti = numeri_random(1, 100);
     squadre[i].falli = numeri_random(1, 100);

// creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
     const {nome, falli} = squadre[i];
     newteam.push(nome, falli);
    }
    //per avere l'oggetto di array
    //for (let i = 0; i < squadre.length; i++) {
    //      const team = squadre[i];
    //      const {nome, falli} = team;
    //     nuovasquadra.push({nome , falli});
    // }

     console.log(squadre);
     console.log(newteam);
     // console.log(nuovasquadra);

})

//FUNCTIONS   Generare numeri random

function numeri_random(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
