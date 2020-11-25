// Il computer deve generare 16 numeri casuali tra 1 e 100.
var listaNumeriComputer = [];
var nCasuali = 16;

function check(numero, array) {
    var bool = true;
    for(var j = 0; j < array.length; j++){
        if(numero == array[j]){
            bool = false;
        }
    }
    if (bool){
        array.push(numero);
    }else{
        nCasuali += 1;
    }
}

for (var i = 0; i < nCasuali; i++){
    var numeroRandom = Math.ceil(Math.random() * 100);
    // I numeri non possono essere duplicati
    check(numeroRandom, listaNumeriComputer)
}
    
console.log(listaNumeriComputer);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var listaNumeriUtente = [];
var tentativi = 100 - nCasuali;
for (var i = 0; i < tentativi; i++){
    var numeroUtente = Number(prompt("inserisci un numero tra 1 e 100"))
    if (numeroUtente > 100){
        console.log("tra uno e 100...");
        i--;
    }
    // L’utente non può inserire più volte lo stesso numero.
    check(numeroUtente, listaNumeriUtente)
    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    if (i == tentativi - 1){
        console.log(tentativi);
    }
    for (var k = 0; k < 16; k++) {
        if (numeroUtente == listaNumeriComputer[k]){
            // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
            console.log(i);
            i = tentativi;
        }
    }
}
