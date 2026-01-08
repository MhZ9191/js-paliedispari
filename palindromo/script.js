/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function verifyPal(uWord) {
  //Primo approccio
  let tmpW = uWord.split("").reverse().join("");
  return tmpW === uWord;
}
const userWord = "AnnA" || prompt("Inserisci la parola da verificare!").trim();
const verifyUserWord = verifyPal(userWord);

let message = verifyUserWord
  ? "La parola inserita è palindroma!"
  : "La parola inserita NON è palindroma!";

console.log(message);
