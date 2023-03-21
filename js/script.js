// Ricordate di copiare solo il file index.html e le cartelle js e css nella nuova repository per evitare dei problemi con git.
// Bonus 1:
// Gestire il tempo di autoplay dopo il click dell'utente, rimettendo il timer di 3 secondi dopo il click per avere autoplay sempre regolare.
// Bonus2:
// Stoppare autoplay all'hover sullo slider e farlo ripartire al togliere del hover. Qui potrebbe servire un po di ricerca per trovare l'evento giusto :occhiolino:

// Input
// Creo Array delle immagini

const images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

// inserisco immagini nel DOM con queryselector nel div slider-items
const item = document.querySelector(".slider-items");

// Creo un ciclo per far scorrere le immagini
for (let i = 0; i < images.length; i++) {
  const currentImg = images[i];

  // Creo una variabile per aggiungere il div con classe item
  const sliderItems = `<div class="item"><img src="${currentImg}"></div>`;
  item.innerHTML += sliderItems;
}

// Creo una variabile con la quale prelevo il contenitore
const itemArray = document.getElementsByClassName("item");

// Assegno al primo Elemento dell'array la variabile firstimage
let firstImage = 0;

// AL primo elemento dell'array vado ad aggiungere la classe active
itemArray[firstImage].classList.add("active");

// // creo una variabile per selezionare l'elemento per scrorrere in basso
// const downBtn = document.querySelector(".arrowdown");

// // Aggiungo interazione al click di arrowdown
// downBtn.addEventListener("click", function () {
//   // Se firstimage e' maggiore della lunghezza di itemArray -1 (perche il primo elemento è 0)
//   if (firstImage < itemArray.length - 1) {
//     // rimuovo la classe active
//     itemArray[firstImage].classList.remove("active");

//     // avanzo al successivo elemento dell'array che diventera' firstimage
//     firstImage++;

//     // e gli aggiungo la classe active
//     itemArray[firstImage].classList.add("active");
//   }
// });

// Implemento lo scorrimento delle immagini con il bottone arrowup

const upBtn = document.querySelector(".arrowup");
const downBtn = document.querySelector(".arrowdown");

// upBtn.addEventListener("click", function () {
//   if (firstImage > 0) {
//     itemArray[firstImage].classList.remove("active");

//     firstImage--;

//     itemArray[firstImage].classList.add("active");
//   }
// });

// Al carousel fatto precedentemente aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// IMPLEMENTO IL DELAY

delayinterval = setInterval(arrowDownDelay, 3000);

downBtn.addEventListener("click", function () {
  arrowDownDelay();
  clearInterval(delayinterval);
  delayinterval = setInterval(arrowDownDelay, 3000);
});

upBtn.addEventListener("click", function () {
  arrowUpDelay();
  clearInterval(delayinterval);
  delayinterval = setInterval(arrowDownDelay, 3000);
});

// CICLO INFINITO

function arrowDownDelay() {
  itemArray[firstImage].classList.remove("active");
  if (firstImage < itemArray.length - 1) {
    firstImage++;
  } else {
    firstImage = 0;
  }

  itemArray[firstImage].classList.add("active");
}

function arrowUpDelay() {
  itemArray[firstImage].classList.remove("active");
  if (firstImage > 0) {
    firstImage--;
  } else {
    firstImage = 4;
  }

  itemArray[firstImage].classList.add("active");
}
