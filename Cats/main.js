// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto,
// che è caratterizzato da: nome, età, colore e sesso.Tramite la funzione
// .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

//Creo array di ogetto gatto con proprietà nome,età,sesso e colore
$(document).ready(function(){
  const cat = [
    {
      nome: "ice",
      eta: 15,
      colore: "arancione",
      sesso: "maschio",
    },
    {
      nome: "battuffolo",
      eta: 7,
      colore: "bianco",
      sesso: "maschio",
    },
    {
      nome: "pluto",
      eta: 3,
      colore: "nero",
      sesso: "femmina",
    },
    {
      nome: "didi",
      eta: 13,
      colore: "grigio",
      sesso: "femmina",
    },
    {
      nome: "gatta",
      eta: 3,
      colore: "giallo",
      sesso: "femmina",
    },
  ];
  // Tramite la funzione.forEach(), stampare in pagina tutti
  // i gattini, ciascuno con il proprio colore e il proprio nome.
  cat.forEach((item) => {
    console.log(`${item.nome} ed il suo colore è:${item.colore}`);

  });

  // Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere
  // a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
  // Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

   const cat_man = cat.filter((item) => item.sesso == "maschio");

   const cat_girl = cat.filter((item) => item.sesso == "femmina");

  const opacitym = [];

   cat_man.forEach((item) => {
      var newitem;
      if (item.eta >= 10) {
        newitem = {... item, opacity: 1};
      }else {
        newitem ={... item, opacity: 0.5};
      }

    $('#lista').append(`<li class= "maschio">${item.nome} ed il suo sesso è: ${item.sesso} <i style = "opacity:${newitem.opacity};" class="fas fa-ribbon"></i> </li>`)
    opacitym.push(newitem);
   });

   const opacityf= [];

   cat_girl.forEach((item) => {
     var neewitem;
     if (item.eta >= 10) {
       newitem = {... item, opacity: 1};
     }else {
       newitem ={... item, opacity: 0.5};
     }

     $('#lista').append(`<li class= "femmina">${item.nome} ed il suo sesso è: ${item.sesso} <i style = "opacity:${newitem.opacity};" class="fas fa-ribbon"></i> </li>`)
     opacityf.push(newitem);
   });


// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
// inserendo solamente nome colore  e opacità del fiocco per ogni gatto.

  const cat2 = [...opacityf, ... opacitym];

  new_cat= cat2.map((item)=>{
    const{nome,colore,opacity}=item;
    return {nome, colore, opacity};
  });
  console.log(new_cat);

})
