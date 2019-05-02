// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Il computer deve generare 16 numeri casuali da 1 a 100.
var numeri_random = [];

// imposto una funzione per generare un numero casuale da 1 a 100.
function  number_generator( min, max){
var number_Range = Math.floor(Math.random() * (max- min) + 1);
return number_Range;
}

// utilizzo un ciclo for per riempire l'array
while (numeri_random.length < 16) {
  var numero = number_generator(1,100);
  if(numeri_random.includes(numero) == false){
  numeri_random.push(numero);
  }
}
console.log(numeri_random)

// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
var numero_presente = false;
var punteggio = [];
// ciclo do while di richiesta
var i = 0;
while (i < 84) {
  var numero_utente = parseInt(prompt('inserisci un numero'));
  if(numeri_random[i] === numero_utente){
    numero_presente = true;
  }
  if( numero_presente) {
    alert('hai perso');
    break;
  }
  i++;
}


  // se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
