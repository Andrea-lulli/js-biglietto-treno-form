// Il programma dovrà chiedere all'utente il numero di 
// chilometri
//  che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare
//  il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in 
// forma umana (con massimo due decimali, per indicare 
// centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let inputNome = document.getElementById("inputnome");

let inputKm = document.getElementById("inputKm");

let inputEta = document.getElementById("inputeta");

let prezzoFinale;

// funzione recupero dati
function recuperoDati() {

  let nome = inputNome.value;

  let Km = parseInt(inputKm.value);


  let eta = parseInt(inputEta.value);

  // prezzo biglietto non sontato
  let prezzoBiglietto = Km * "0.21";

  // funzione sconto in base all'eta utente
  if (eta == "2") {


    prezzoFinale = (prezzoBiglietto - (prezzoBiglietto * 0.2)).toFixed(2);


  } else if (eta == "3") {

    prezzoFinale = (prezzoBiglietto - (prezzoBiglietto * 0.4)).toFixed(2);


  } else {

    prezzoFinale = prezzoBiglietto;
  }

  // funzione nome e cognome utente
  let risultatoNome = document.getElementById("risultatonome").innerHTML = ` ${nome} `;

  // funzione tipo del biglietto
  let tipoBiglietto = document.getElementById("bgstandard").innerHTML = "Biglietto Standard";

  // funzione numero carrozza
  let numeroCarrozza = document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

  // funzione codice CD
  let codiceCp = document.getElementById("codicecp").innerHTML = Math.floor(Math.random() * 10000);

  // funzione prezzo finale
  let prezzo = document.getElementById("risultato").innerHTML = `${prezzoFinale}€`;

}
