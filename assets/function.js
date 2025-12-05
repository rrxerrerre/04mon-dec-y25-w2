/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*const Area = function (width, height) {
  return width * height;
};
console.log(Area(2, 8));*/

function area(l1, l2) {
  const result = l1 * l2;
  console.log(area(3, 4));
}
area(3, 4);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*function crazySum (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
console.log(crazySum(8, 8));
console.log(crazySum(7, 8));*/

function crazySum(n1, n2) {
  const sum = n1 + n2;
  if (n1 === n2) {
    return sum * 3;
  } else {
    return sum;
  }
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(i) {
  const diff = Math.abs(i - 19);
  if (i > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}
console.log(crazyDiff(10));
console.log(crazyDiff(25));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(i) {
  if ((i >= 20 && i <= 100) || i === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(20));
console.log(boundary(100));
console.log(boundary(400));
console.log(boundary(15));
console.log(boundary(8));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(str) {
  if (str.toLowerCase().startsWith("epicode")) {
    //string methos MDN - toLowerCase startWith sono metodi
    return str;
  } else {
    return "EPICODE" + str;
  }
}
console.log(epify("è un mondo bellissimo"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(i) {
  return i % 3 === 0 || i % 7 === 0;
}
console.log(check3and7(9));
console.log(check3and7(28));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (Epicode) {
  return Epicode.split("").reverse().join("");
};
console.log(reverseString("Epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ /*da stringa ad array, un array vuole sempre un ciclo for loop - Charat*/
function upperFirst(phrase) {
  console.log(phrase);
  const words = phrase.split("");
  console.log(words);
  const finalPhrase = [];
  for (let i = 0; i < words, length; i++) {
    const word = word[i];
    console.log(word);
    const firstLetter = word[0].toUpperCase();
    console.log(firstLetter);
    const upperWord = word.slice(1);
    console.log(upperWord);
  }
  console.log(finalPhrase.join(" "));
  return finalPhrase.join("");
}
console.log(upperFirst("questo weekend tocchiamo l'erba fuori"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
  La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ /*slice ci seleziona la parte interessata*/
function cutString(s) {
  let nuovaStringa = "";
  const res = s.slice(1, s.length - 1);
  return res;
}

/*argomenti sono i valori che stiamo passando alla funzione; li passiamo ai parametri della funzione*/

/*0123 per conoscere il risultato di uno slice il calcolo da fare è la fine - l'inizio mi darà la lunghezza del risultato*/
/* "abcd" abcd la lunghezza della stringa contiene 4 caratteri
  nella programmazione spesso troveremo nel caso di "slice" avremo l'inizio incluso mentre la fine sarà esclusa*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
