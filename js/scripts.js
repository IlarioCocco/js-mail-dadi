// Gioco dei dadi

// 1 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var dadoGiocatore = (Math.floor(Math.random() * 6) + 1);
console.log("Dado Giocatore:" + dadoGiocatore)
alert("Dado Giocatore:" + " " +  dadoGiocatore)

var dadoComputer = (Math.floor(Math.random() * 6) + 1);
console.log("Dado Computer:" + dadoComputer)
alert("Dado Computer:" + " " + dadoComputer)


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



// esercizio lista Mail

// 1 Chiedi all'utente la sua email,
var richiestaMail = prompt("inserisci la tua E Mail");
console.log("Nuova email da verificare: " + richiestaMail);

// 2 controlla che sia nella lista di chi può accedere
var listaEmail = ["Ilario@gmail.com", "Mario@gmail.com", "Dario@gmail.com"];



// 3 stampa un messaggio appropriato sull'esito del controllo.
// var isInList = false;


isInList = false;

for (var i = 0; i < listaEmail.length; i++) {
    console.log(listaEmail[i])
    
    if (listaEmail[i] == richiestaMail) {
        isInList = true;
    //     alert("E mail ok")
    //     console.log("E mail ok")
    // } else {
    //     alert("e mail non valida");
    // }
    }
}


if ( isInList == true) {
    alert("E mail ok")
    console.log("E mail ok puoi entrare")
} else {
    alert("e mail non valida");
    console.log(richiestaMail + ": è una E mail non valida")
}







