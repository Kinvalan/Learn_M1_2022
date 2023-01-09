
/*
Oppg:

Lag et program som viser alfabetet når man trykker på en knapp.

*/


// Model

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"];

let numbers = [1, 2, 3, 4, 5];








// View


updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="showAlphabet()">Vis alfabetet i konsollen</button>
    <button onclick="showNumbers()">Vis tall i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}





// Controller



/* 
Her får vi brukt en "for of løkke" og et array "alphabet".

For hver bokstav (letter) i alphabet arrayet vil vi konsoll logge 1 bokstav.
Dette gjentas gjennom hele alphabet arrayet. 
Vi vil derfor se alle bokstavene en etter en i konsollen når vi trykker på knappen vår.
*/

function showAlphabet() {

    for (const letter of alphabet) {
        console.log(letter);
    }
    updateView();
}



/* 
Her får vi brukt en "for of løkke" og et array "numbers".

For hvert tall (number) i numbers arrayet vil vi konsoll logge ett tall.
Dette gjentas gjennom hele numbers arrayet. 
Vi vil derfor se alle tallene en etter en i konsollen når vi trykker på knappen vår.
*/

function showNumbers(){
    let sum = 0;
    for(number of numbers){
        sum += number;
        console.log(number);
    }
    updateView();
}

