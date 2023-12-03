// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Il DOM è stato caricato");

//   const button = document.getElementById("openConsole");
//   console.log("Il pulsante:", button);

//   button.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("Il pulsante è stato cliccato");
//     console.log("La console dovrebbe essere aperta!");
//   });

//   const CIAO = console.log("LAVORI IN CORSO");
// });

// Crea un array di oggetti, poi stampa solo 1 delle sue proprietà
const cripto = [
  {
    name: "BTC",
    price: 36000,
    outInMarket: 2009,
  },
  {
    name: "ETH",
    price: 2200,
    outInMarket: 2015,
  },
  {
    name: "DOT",
    price: 5.5,
    outInMarket: 2019,
  },
  {
    name: "SOL",
    price: 63,
    outInMarket: 2020,
  },
  {
    name: "KSM",
    price: 25.5,
    outInMarket: 2019,
  },
];
const nomi = [];
for (let i = 0; i < cripto.length; i++) {
  nomi.push(cripto[i].name);
}
console.log("NOMI DELLE CRIPTO IN LISTA:", nomi);

// ORA VOGLIO STAMPARE SOLO QUELLE NATE DAL 2019 IN POI:

const duemila = [];

for (let i = 0; i < cripto.length; i++) {
  if (cripto[i].outInMarket >= 2019) {
    duemila.push(cripto[i]);
  } else;
}
console.log("CRIPTO NATE DAL 2019 IN POI", duemila);

// let i = 0;
// while (i < cripto.length) {
//   duemila.push(cripto[i].outInMarket >= 2019);
//   i++;
// }
// console.log("CRIPTO NATE DAL 2019 IN POI", duemila);

/*
 Scrivi una funzione che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const string = function (parole) {
  return parole.slice(1, -1);
};
console.log(
  "STRINGA SENZA PRIMA ED ULTIMA PAROLA:",
  string("Il web 3 sarà il futuro")
);

// SCRIVI UNA FUNZIONE CHE RICEVE UNA STRINGA, E SE NON INIZIA CON "CRIPTO" AGGIUNGILO AD INIZIO FRASE:

const start = function (stringa) {
  if (stringa.startsWith("Cripto")) {
    return stringa;
  } else {
    return "Cripto" + stringa;
  }
};
console.log(
  "SE LA FRASE NON INIZIA CON LA PAROLA CRIPTO, VERRà AGGIUNTA ALL'INIZIO:",
  start(", sono i soldi del futuro")
);

// INSERISCI IN ARRAY CRIPTO UN OGGETTO DI NOME TODAY:

// let data = "23/12/23";
// let giornoData = {
//   Today: data,
// };
// for (let i = 0; i < cripto.length; i++) {
//   cripto.push(cripto[i].giornoData.length - 1);
// }
// console.log(cripto);                                       Da sistemare
