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



function recuperoDati(){

    let nome = inputnome.value;

    let km = parseInt(inputKm.value);
    

    let eta = parseInt(inputeta.value);
    

    let prezzoBiglietto = km * "0.21";


    if ( eta <= 18 ){
   
        prezzoFinale = (prezzoBiglietto - ( prezzoBiglietto * 0.2 )).toFixed(2);
         
         
       } else if  ( eta >= 65) {
         
         prezzoFinale = (prezzoBiglietto - ( prezzoBiglietto * 0.4 )).toFixed(2);
     
     
      } else {
     
         prezzoFinale = prezzoBiglietto;
      } 
     
      

    let risultatoNome = document.getElementById("risultatonome").innerHTML = ` ${ nome } `;
 
    let tipoBiglietto = document.getElementById("bgstandard").innerHTML = "Biglietto Standard";

    let numeroCarrozza = document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10 ) + 1;

    let codiceCp = document.getElementById("codicecp").innerHTML = Math.floor(Math.random() * 10000 );
 
    let prezzo = document.getElementById("risultato").innerHTML = `${prezzoFinale}€`; 
}
