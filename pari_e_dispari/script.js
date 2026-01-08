/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

function pariOdispari() {
  let tmpChoice = prompt("Scegli tra pari o dispari!")
    .trim()
    .toLocaleLowerCase();
  //ciclo finchè non inserisco pari o dispari
  while (tmpChoice != "pari" && tmpChoice != "dispari") {
    tmpChoice = prompt("Scegli tra pari o dispari!").trim().toLocaleLowerCase();
  }
  return tmpChoice;
}

function numberOneToFive() {
  let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
  //ciclo per un numero compreso da 1 a 5
  while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
  }
  return userNumber;
}

function randomNumber(min, max) {
  const tmpNumb = Math.floor(Math.random() * (max - min + 1) + min);
  return tmpNumb;
}

// MAIN
// const userChoice = pariOdispari();
// const uNumber = numberOneToFive();

const pcNumber = randomNumber(1, 5);
console.log(pcNumber);
