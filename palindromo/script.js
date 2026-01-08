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
  //   const tmpW = [];
  //   for (let i = 0; i < uWord.length; i++) {
  //     tmpW[i] = uWord[uWord.length - (i + 1)];
  //   }
  //   return uWord == tmpW.join("");

  //un altro approccio

  const lenW = uWord.trim().length / 2;
  for (let i = 0; i < lenW; i++) {
    if (uWord[i] != uWord[uWord.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

const userWord = "AnnA" || prompt("Inserisci la parola da verificare!").trim();
const verifyUserWord = verifyPal(userWord);

const message = verifyUserWord
  ? "La parola inserita è palindroma!"
  : "La parola inserita NON è palindroma!";

console.log(message);
