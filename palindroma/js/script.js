// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// // 1. Creo una funziona che riporta true se la parola è palindroma, altrimenti riporta false
// function isPalindroma(parola){
//   // 2. Definisco una variabile booleana per ritornare il risultato della funzione
//   var risultato = false;
//   // 3. Definisco una variabile per scorrere la parola partendo dalla fine
//   var x = parola.length;
//   // // 4. Definisco una variabile per stabilire se la parola non è palindroma
//   var y = 0;
//   // // 5. Scorro tutta la parola e la confronto con la l'indice partendo dalla fine
//   for (var i = 0; i < parola.length; i++) {
//     x--;
//     if ( parola[i] == parola[x] ) {
//       risultato = true;
//     } else {
//       y++;
//     }
//   }
//   // 6. Ultimo controllo per vedere se la parola non è palindroma
//   if ( y > 0) {
//     risultato = false;
//   }
//   return risultato;
// }


 // Versione con while

 // 1. Creo una funziona che riporta true se la parola è palindroma, altrimenti riporta false
 function isPalindroma(parola){
   // 2. Definisco una variabile booleana per ritornare il risultato della funzione
   var risultato = false;
   // 3. Definisco una variabile per scorrere la parola partendo dalla fine
   var x = parola.length;
   // // 4. Definisco una variabile per stabilire se la parola non è palindroma
   var y = 0;
   // // 5. Scorro tutta la parola e la confronto con la l'indice partendo dalla fine
   var i = 0;

   while ( i < parola.length && y < 1 ) {
     x--;
     if ( parola[i] == parola[x] ) {
       risultato = true;
     } else {
       y++;
     }
     i++;
   }

   // 6. Ultimo controllo per vedere se la parola non è palindroma
   if ( y > 0) {
     risultato = false;
   }
   return risultato;
 }


// 7. Chiedo all'utente una parola
var parolaUtente = prompt("Inserisci una parola");

// 8. Transformo tutta la parola in minuscolo per non avere problemi nel confronto
parolaUtente = parolaUtente.toLowerCase();

// 9. Verfico se la parola è palindroma oppure no
if ( isPalindroma(parolaUtente) ) {
  alert("La parola è palindroma");
} else {
  alert("La parola non è palindroma");
}
