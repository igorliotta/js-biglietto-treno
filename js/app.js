// # Calcolo del prezzo del biglietto del treno

// - Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere:
//    - Dichiarare una variabile inerente al numero di chilometri che l'utente intende percorrere.
//    - Convertire il valore di tale variabile da 'stringa' a numero, in maniera tale che il sistema riesca a considerarlo come numero e non come parola.
let kmDesiderati = parseInt(prompt("Salve, quanti km desidera percorrere in questo viaggio?"));

//    - Accertarsi che il valore inserito nel programma risulti valido. 
console.log(kmDesiderati);


// - Il programma dovrà chiedere all’utente la sua età:
//    - Dichiarare una variabile inerente all'età dell'utente.
//    - Convertire il valore di tale variabile da 'stringa' a numero, in maniera tale che il sistema riesca a considerarlo come numero e non come parola.
let userAge = parseInt(prompt("Mi dica, qual è la sua età?"));

//    - Accertarsi che il valore inserito nel programma risulti valido. 
console.log(userAge);

// ## Il programma, sulla base di queste informazioni, dovrà calcolare il prezzo totale e scontato del viaggio.
//   - Dichiarare e considerare tutte le variabili che servono a comporre il prezzo finale e scontato del viaggio, ovvero: 
//     - km che si vogliono percorrere.
//     - età dell'utente che intende viaggiare.
//     - prezzo base (0.21 € al km).
//     - prezzo al km.
let kmPrice = 0.21;
console.log(kmPrice);

//         - Definire e dichiarare prezzo base.
//             - prezzo base = numero km * prezzo per ogni km.
let basicPrice = kmDesiderati * kmPrice;
console.log(basicPrice);
//     - sconto del 20% per i minorenni OR sconto del 40% per gli over 65.
//         - Dichiaro una variabile per lo sconto del 20%.
//         - Dichiaro una variabile per lo sconto del 40%.  
//   - Dichiarare una variabile prezzoScontato che coinciderà poi con la differenza tra le seguenti variabili, che terrà in considerazione del giusto sconto da applicare.
// let salePrice 

//      - SE (l'utente ha < 18 anni) {
if (userAge < 18) {
    // allora lo sconto da applicare sarà del 20%
    let sale20 = ((basicPrice * 20) / 100);
    basicPrice = basicPrice - sale20;
    console.log(basicPrice);
}
//        
//      - ALTRIMENTI SE (l'utente ha tra i 18 e i 64 anni) {
else if (userAge > 18 && userAge < 65) {
    // allora non ci sarà nessuno sconto da applicare 
    console.log(basicPrice);
}
//        
//      - ALTRIMENTI SE (l'utente ha > 65 anni) {
else if (userAge > 65) {
    // allora lo sconto da applicare sarà del 40% 
    let sale40 = ((basicPrice * 40) / 100);
    basicPrice = basicPrice - sale40;
    console.log(basicPrice);
}
//        

//   - Effettuare la differenza tra queste variabili per definire infine il valore finale della variabile prezzoScontato.
//      - prezzoScontato = prezzoIniziale - sconto (20% o 40%).





// ### Infine stampare il nostro prezzo sul documento, specificando massimo due cifre dopo la virgola.

const messageDomElement = document.getElementById ('message'); 
messageDomElement.innerHTML = basicPrice.toFixed(2);