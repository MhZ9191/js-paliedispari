/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function verifyPal(uWord) {
  //Primo approccio
  //   let tmpW = uWord.split("").reverse().join("");
  //   return tmpW === uWord;

  //secondo approccio

  let tmpW = [];
  for (let i = 0; i < uWord.length; i++) {
    tmpW[i] = uWord[uWord.length - (i + 1)];
  }

  return uWord == tmpW.join("");
}

const userWord = "AnnA" || prompt("Inserisci la parola da verificare!").trim();
const verifyUserWord = verifyPal(userWord);

let message = verifyUserWord
  ? "La parola inserita è palindroma!"
  : "La parola inserita NON è palindroma!";

console.log(message);
