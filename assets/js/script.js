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
    - if/else if/else if/else
    - stampo in pagina
*/

const container = document.querySelector('.container');
console.log(container);

//Creo loop per numeri da 1 a 100
for (let i = 1; i < 101; i++) {
    console.log(i);

    //Creo il cerchio
    const circleDOM = document.createElement('div');
    circleDOM.className = 'circle';

    let number = i; 
    
    //Se il numero è divisibile sia per 3 sia per 5 scrivo fizzbuzz
    if((!(i % 3)) && (!(i % 5))){
        number = 'FizzBuzz';
        circleDOM.classList.add('bg-danger');
    }else if(!(i % 5)){ //Se il umero è divisibile per 5 scrivo buzz
        number = 'Buzz';
        circleDOM.classList.add('bg-warning');
    }else if(!(i % 3)){//Se il numero è divisibile per 3 scrivo fizz
        number = 'Fizz';
        circleDOM.classList.add('bg-success');
    }else{ //Altrimenti sfondo primary
        circleDOM.classList.add('bg-primary');
    }

    //Spampo in pagina
    circleDOM.append(number);
    container.append(circleDOM);
}