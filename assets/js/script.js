/*

Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)? posso usare il %

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. 

*/

/*
## Tools
    - const
    - log
    - for
    - log
    - if/ else if/ if
    - stampo in pagina
*/

const circleDOM = document.querySelector('.circle');
console.log(circleDOM);

//Creo loop per numeri da 1 a 100
for(let i = 1; i < 101; i++){
    console.log(i);
}


//Se il numero è divisibile per 3 scrivo fizz

//Altrimenti se il umero è divisibile per 5 scrivo buzz

//Altrimenti se il numero è divisibile sia per 3 sia per 5 scrivo fizzbuzz

//Spampo in pagina