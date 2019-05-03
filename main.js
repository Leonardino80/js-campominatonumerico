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
var punteggio = 0;
var numeri_inseriti =[]
// ciclo do while di richiesta
var partita_in_corso = true;
var i = 0;
while (partita_in_corso) {
  var numero_utente = parseInt(prompt('inserisci un numero da 1 a 100'));
  if(numeri_random.includes(numero_utente)){
// se il numero è presente nella lista dei numeri generati, la partita termina,
    partita_in_corso = false;
    console.log('hai perso');
    numeri_inseriti.push(numero_utente);
  // altrimenti continua chiedendo all’utente un altro numero.
  } else if ((numeri_inseriti.includes(numero_utente)) || (numero_utente === 0) || (isNaN(numero_utente)) || (parseInt(numero_utente) > 100)) {
    alert('numero già inserito o non valido!');
    console.log('Questi sono i numeri tra 1 e 100 che hai inserito : ' + numeri_inseriti);
  } else if (partita_in_corso) {
    numeri_inseriti.push(numero_utente);
    punteggio += 1;
    console.log(punteggio + 'punti')
  } else {
    console.log('Hai vinto! il tuo punteggio è ' + punteggio + ' punti')
  }
  i++;
}
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
alert ('Hai perso! il tuo punteggio finale è   ' + punteggio + ' punti');
console.log('Questi sono i numeri tra 1 e 100 che hai inserito : ' + numeri_inseriti);
