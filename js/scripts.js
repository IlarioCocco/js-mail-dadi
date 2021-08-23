// Gioco dei dadi

// 1 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var dadoGiocatore = (Math.floor(Math.random() * 6) + 1);
console.log("Dado Giocatore:" + dadoGiocatore)
alert(dadoGiocatore)

var dadoComputer = (Math.floor(Math.random() * 6) + 1);
console.log("Dado Computer:" + dadoComputer)
alert(dadoComputer)


// 2 Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (dadoGiocatore > dadoComputer) {
    alert("Result : " + "hai vinto!");
    console.log("Result : " + "hai vinto!");

} else if (dadoGiocatore < dadoComputer) {
    alert("Result : " + "hai perso! Pc win!");
    console.log("Result : " + "hai perso! Pc win!");

} else {
    alert("Pareggio");
    console.log("Result : " + "Pareggio!");
}



// Mail

// 1 Chiedi all'utente la sua email,
var richiestaMail = prompt("inserisci la tua E Mail")

// 2 controlla che sia nella lista di chi può accedere
// 3 stampa un messaggio appropriato sull'esito del controllo.
var listEmail = ["Ilario@gmail.com", "Mario@gmail.com", "Dario@gmail.com"]
console.log(listEmail);

if (listEmail[0] == richiestaMail) {
    alert("la tua mail può accedere");
    console.log("la tua mail può accedere");

} else if (listEmail[0] != richiestaMail) {
    alert("mail fail");
    console.log("mail fail");
}
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte ?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve ?
