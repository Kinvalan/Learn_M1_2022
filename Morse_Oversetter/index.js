/*
Denne oppgaven løser du med: MVC, array, variabler og for-løkke


I denne oppgaven skal du gjøre det mulig å:

- skrive vanlig tekst inn i et inputfelt og få oversatt teksten til morsekode ved å trykke enter.

Bruk MVC oppsettet og lag et input for å skrive tekst. 

- Ta vare på det som skrives i textfeltet

- Bruk morse kode arrayet vedlagt nedenfor til å slå opp en og en bokstav i og oversette
 - vis morsekoden på skjermen
const morseCodeArray = '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'
*/






// Model

const morseCodeArray = [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....','..',
 '.---', '-.-', '.-..', '--', '-.', '---', '.--.','--.-', '.-.', '...',
  '-', '..-', '...-', '.--', '-..-','-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'];

const alphabetArray = "abcdefghijklmnopqrstuvwxyz æøå";
const outputDiv = document.getElementById('app');
let lettersFromInput = "";
let letterTranslatedToMorse = " "; 




// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    Skriv inn tekst og gjør om til morsekode (trykk enter)
    <input id="inputId" type="text" onchange="translator(this)">

    <div 
    class="textClass">
    ${lettersFromInput}
    <p>${letterTranslatedToMorse}</p>
    </div>
    `;

    document.getElementById('app').innerHTML = html;
}





// Controller



/*
Vi lager en funksjon for å oversette tekst til morse.
Funksjonen har et parameter "valueFromInput". Parameteret blir brukt i onchange-en med (this) i input-en.

Vi setter lettersFromInput variablen lik "valueFromInput" variablen sin verdi i store bokstaver. 
 - Da vil bokstavene vi skriver inn være det samme som verdien/innholdet i valueFromInput variablen. 


Vi lager en for of løkke, gjelder for hver bokstav av det vi skriver inn.
 - Vi deklarerer en ny variabel i løkka "singleLetterFromInput" og setter den til å være lik "letter" variablen (samme verdi som i parentesene i løkka).
 

indexOf()-metoden returnerer posisjonen til den første forekomsten av en verdi i en string.


Vi deklarerer en ny variabel "letterIndex" og setter den lik konstanten "alphabetArray" sin indexOf med parameteret "singleLetterFromInput".
 - I "alphabetArray" leiter koden etter hvilken index de forskjellige bokstavene er på, med IndexOf() metoden.
 - Vi bruker et parameter i "indexOf" nemlig "singleLettersFromOuput". 
 - Det gjør at koden leiter i stringen "singleLetterFromOutput" når den ser etter hvilken bokstav som skal brukes.


 Til slutt i løkka setter vi "letterTranslatedToMorse" variablen til å plusses på "morseCodeArray" konstanten med indexen "letterIndex" og et mellomrom.
  - Da vil den oversatte teksten bli lik morsekodene som går igjennom: "alphabetArray.indexOf(singleLetterFromInput)".
  - Det vil si at den oversatte teksten er lik "morseCodeArray" som nå blir satt til å leite gjennom hvilke bokstaver som betyr hvilken morsekode.
  - Resultatet blir en morsekode. 


Det siste vi gjør annet enn updateView() er å bestemme at etter at løkka er ferdig settes "letterTranslatedToMorse" variablen til en tom string. 
*/


function translator(valueFromInput) {
    lettersFromInput = valueFromInput.value.toUpperCase();

    for (letter of valueFromInput.value) {
        let singleLetterFromInput = letter;
        let letterIndex = alphabetArray.indexOf(singleLetterFromInput);

        letterTranslatedToMorse += morseCodeArray[letterIndex] + " ";
    }

    updateView();
    letterTranslatedToMorse = "";
}






