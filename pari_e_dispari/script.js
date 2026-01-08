/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userChoice = prompt("Scegli tra pari o dispari!")
  .trim()
  .toLocaleLowerCase();
//ciclo finchè non inserisco pari o dispari
while (userChoice != "pari" && userChoice != "dispari") {
  userChoice = prompt("Scegli tra pari o dispari!").trim().toLocaleLowerCase();
}

let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
//ciclo per un numero compreso da 1 a 5
while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
  userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
}
