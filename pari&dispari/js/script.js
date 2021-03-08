// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. L'utente sceglie pari o dispari
do {
  var scelta = prompt("Scegli pari o dispari.");
  var pariDispari = false;
  scelta = scelta.toLowerCase();
  if ( scelta == "pari" ){
    pariDispari = true;
  }
} while ( (scelta != "pari") && (scelta != "dispari") );

// 2. L'utente sceglie un numero da 1 a 5 ( validazione dell'input)
do {
  var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

} while ( isNaN(numeroUtente) || ( numeroUtente > 5 || numeroUtente < 1) );

// 3. Creo una funzione per generare un numero random del computer da 1 a 5
function numeroRandom() {
  return Math.floor(Math.random() * 5  + 1);
}

// 4. Creo una variabile per il numero random del computer
var numeroComputer = numeroRandom();

// 5. Creo una funzione per sommare i due numeri
function somma(num1, num2){
  var risultato = num1 + num2;
  return risultato;
}
// 6.Somma dei due numeri
somma = somma(numeroUtente, numeroComputer);

// 7. Creo una funzione per stabilire se il numero è pari o pariDispari
function pariOdispari(num){
  var risultato = false;
    if ( num % 2 == 0 ) {
      risultato = true;
    }
    return risultato;
  }
// 8. Variabile esito pari o dispari
sommaPariDispari = pariOdispari(somma);

// 9. Stabilisco se la somma è pari o dispari e dichiaro il vincitore
var esito = document.getElementById('esito');
if ( sommaPariDispari == pariDispari) {
  esito.className = "vinto";
  esito.innerHTML = "Hai vinto!";

} else {
  esito.className = "perso";
  esito.innerHTML = "Hai perso!"
}

document.getElementById('sceltautente').innerHTML = scelta;
document.getElementById('numeroutente').innerHTML = numeroUtente;
document.getElementById('numerocomputer').innerHTML = numeroComputer;
document.getElementById('somma').innerHTML = somma;
