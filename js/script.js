// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parola = prompt('digita una parola');
let palindroma = 'non è palindroma';
console.log(reverseWords(parola));
if (reverseWords(parola)===parola){
  palindroma='è palindroma';
}

console.log('la parola',palindroma);

function reverseWords(str) {
  let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// **Consigli del giorno**
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// utente inserisci la stringa o 'pari' o 'dispari'
let pariDispari = prompt('pari o dispari?');
console.log('hai scelto',pariDispari)
// l'utente inserisce un numero da 1 a 5
let numeroUtente = parseInt (prompt('scegli un numero da 1 a 5'));
console.log('hai scelto il',numeroUtente)
// il computer ci da indietro un numero random da 1 a 5
let numeroPC = getNumeroRandomDa1A5();
console.log('il pc ha scelto',numeroPC)
// sommiamo i due numeri


let somma = sommaDueNumeri(numeroUtente, numeroPC);
let risultatoGioco = 'perso';
if (pariDispari===getPariDispari(somma)){
      risultatoGioco = 'vinto';
}

console.log('la somma dei due numeri è', somma,'che è un numero',getPariDispari(somma),'quindi tu hai',risultatoGioco);



// funzioni  numeroRandom sommaDueNumeri e pariDispari 
function getNumeroRandomDa1A5() {
  const numeroRandom = Math.floor(Math.random()*5)+1;
  return numeroRandom;
}
function sommaDueNumeri(numeroA, numeroB) {
  return numeroA + numeroB;
}
function getPariDispari(valore){
  let paridispari = 'dispari';
   if (!(valore%2)){
     paridispari= 'pari';
   }
   
   return paridispari ;
}
