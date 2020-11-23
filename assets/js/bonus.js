// Il computer deve generare 16 numeri casuali tra 1 e 100.
listaNumeriComputer = [];

function genera(numero){
    for (var i = 0; i < 16; i++){
        var numeroRandom = Math.ceil(Math.random() * numero);
        // I numeri non possono essere duplicati
        var stampo = true;
        for(var j=0; j < i; j++){
            if(numeroRandom == listaNumeriComputer[j]){
                stampo = false;
            }
        }
        if (stampo){
            listaNumeriComputer[i] = numeroRandom 
        }else{
            i--;
        }
    }
    
}
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
var difficoltà = prompt("Che livello di difficoltà vuoi? 0, 1, 2")
// con difficoltà 2 => tra 1 e 50
if (difficoltà == 2){
    genera(50);
    // con difficoltà 1 =>  tra 1 e 80
}else if(difficoltà == 1){
    genera(80);
    // con difficoltà 0 => tra 1 e 100
}else{
    genera(100);
}

console.log(listaNumeriComputer);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
listaNumeriUtente = [];
for (var q = 0; q < 4; q++){
    var numeroUtente = Number(prompt("inserisci un numero tra 1 e 100"))
    var insertNumber = true;
    // L’utente non può inserire più volte lo stesso numero.
    for(var z = 0; z < q; z++){
        if(numeroUtente == listaNumeriUtente[z]){
            insertNumber = false;
        }  
    }
    if (insertNumber){
        listaNumeriUtente[q] = numeroUtente;
    }else{
        q--;
        console.log("Questo numero è già stato inserito");
    }
    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    if (q == 3){
        console.log(4);
    }
    for (var k = 0; k < 16; k++) {
        if (numeroUtente == listaNumeriComputer[k]){
            // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
            console.log(q);
            q = 4;
        }
    }
}
