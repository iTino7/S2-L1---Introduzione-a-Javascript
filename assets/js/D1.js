/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*  Allora, iniziamo col dire che i principali datatype di Javascript, detto anche JS, ne sono 6: STRING, NUMBER, NULL, BOOLEAN, UNDEFINED e OBJECT. 
    Questi datatype aiutano l'utente a verificare il tipo che è usato, 
    in questo caso se ti dicessi "ora ti do un regalo"  questo sarebbe di tipo string perché contiene solo del testo, 
    invece se ti chiedessi di farmi un'addizione quello sarebbe di tipo number, 
    oppure, se ti chiedessi di descrivermi il tuo giocattolo preferito allora stiamo parlando di un oggetto (Object),
    oppure se dovessimo parlare di vero o falso, l'esempio sarebbe, tu hai gli occhi verdi e hai 14 anni, tu mi risponderesti di no perché non hai 14 anni e non hai gli occhi verdi (False), oppure vero (True) se fosse il contrario,
    per finire parliamo di null e undefined, di regola sono simili, ma per spiegartela pensala in questo modo, 
    prendi di nuovo il tuo giocattolo preferito e mettilo nella tua cartella, in questo caso non succede nulla, ma se togliessi il tuo giocattolo dalla cartella in quel caso avresti un UNDEFINED, cioè niente, ti ritroveresti con la cartella vuota,
    invece con null, per farti un esempio, prendi quella stessa cartella e invece di metterci il tuo giocattolo, ci metti un bigliettino con su scritto "questa cartella è vuota", in questo caso, a differenza di undefined, hai deciso di rimanere la cartella vuota di proposito. 


*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Sabatino";

console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 20;

let sum = num1 + num2;

console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Borrelli";

console.log(myName);

const lastName = "Borrelli";

lastName = "Sabatino";

console.log(lastName);

// lastName = "Borrello"; //Già in questo caso vscode non ci aiuta a trovare la variabile "lastName" perché è una variabile dentro const che non può essere sostituita,
// quindi quando andremo a controllarla nel console.log, ci darà l'errore " Uncaught TypeError: Assignment to constant variable. "

// console.log(lastName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num4 = 4;

let sum2 = x - num4;

console.log(sum2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1);
console.log(name2);

let diffName = name1 === name2; //In questo esempio ci viene mostrato che i due name sono differenti e quindi il risultato è FALSE ( come si può vedere tranquillamente nel .log(diffName))

console.log(diffName);

let diffNameLowerCase = name1 === name2.toLowerCase(); // in questo esempio invece avremo il risultato TRUE (.log(diffNameLowerCase)) perché entrambi i nomi sono identici e quindi l'uguaglianza è praticamente uguale.

console.log(diffNameLowerCase);
