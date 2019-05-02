// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Il computer deve generare 16 numeri casuali da 1 a 100.
var numeri_random = [];

// imposto una funzione per generare un numero casuale da 1 a 100.
function  number_generator(){
var number1to100 = Math.floor(Math.random() * 100 + 1);
return number1to100;
}

// utilizzo un ciclo for per riempire l'array
for (var i = 0; i < 16 ; i++) {
  numeri_random.push(number_generator());
}
console.log(numeri_random);

// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
var numero_presente = false;
var punteggio = []
// ciclo do while di richiesta
var i = 0;
do {
  var numero_utente = prompt('inserisci un numero');
  if (numero_utente === numeri_random[i]) {
    numero_presente = true ;
    console.log('hai perso')
    break;
  } else {
    punteggio.push(numero_utente);
  }
  i++;

} while ( i < 100 );


  // se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
