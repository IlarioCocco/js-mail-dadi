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
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte ?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve ?
