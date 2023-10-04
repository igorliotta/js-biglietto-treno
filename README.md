# Calcolo del prezzo del biglietto del treno

- Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere:
   - Dichiarare una variabile inerente al numero di chilometri che l'utente intende percorrere.
   - Convertire il valore di tale variabile da 'stringa' a numero, in maniera tale che il sistema riesca a considerarlo come numero e non come parola.
   - Accertarsi che il valore inserito nel programma risulti valido. 

- Il programma dovrà chiedere all’utente la sua età:
   - Dichiarare una variabile inerente all'età dell'utente.
   - Convertire il valore di tale variabile da 'stringa' a numero, in maniera tale che il sistema riesca a considerarlo come numero e non come parola.
   - Accertarsi che il valore inserito nel programma risulti valido. 

## Il programma, sulla base di queste informazioni, dovrà calcolare il prezzo totale e scontato del viaggio.
  - Dichiarare e considerare tutte le variabili che servono a comporre il prezzo finale e scontato del viaggio, ovvero: 
    - km che si vogliono percorrere.
    - età dell'utente che intende viaggiare.
    - prezzo base (0.21 € al km).
       - Definire e dichiarare prezzo base.
            - prezzo base = numero km * prezzo per ogni km.
    - sconto del 20% per i minorenni OR sconto del 40% per gli over 65.
      - Dichiaro una variabile per lo sconto del 20%.
      - Dichiaro una variabile per lo sconto del 40%.
  
  - Dichiarare una variabile prezzoScontato che coinciderà poi con la differenza tra le seguenti variabili, che terrà in considerazione del giusto sconto da applicare.

     - SE (l'utente ha < 18 anni) {
       allora lo sconto da applicare sarà del 20% }
     - ALTRIMENTI SE (l'utente ha tra i 18 e i 64 anni) {
       allora non ci sarà nessuno sconto da applicare }
     - ALTRIMENTI SE (l'utente ha > 65 anni) {
       allora lo sconto da applicare sarà del 40% }

  - Effettuare la differenza tra queste variabili per definire infine il valore finale della variabile prezzoScontato.
     - prezzoScontato = prezzoIniziale - sconto



### Infine stampare il nostro prezzo sul documento, specificando massimo due cifre dopo la virgola.