/*
Lag et program som kan ta inn input fra bruker,

 Du skal også ha tre knapper:

- en knapp som printer ut hvor mange bokstaver som finnes i teksten

- en knapp som teller antall vokaler 

- en knapp som kan fjerne alle vokalene fra teksten
*/



// Model

// Begynner med å deklarere variablene vi har bruk for. 
// Disse skal refereres til i funskjonene, så de har første pri.

let text = "";
let numberOfLetters = 0;
let numberOfVocals = 0;
let vocals = ["A", "E", "I", "O", "U", "Y", "Æ", "Ø", "Å"];





// View

// Så viser vi htmlen her, samt. som vi gir elementene de verdiene de må ha for at programmet skal fungere.


updateView()
function updateView(){
    html = /*HTML*/ `
    <button>Vis antall bokstaver i teksten</button>
    <button>Vis antall vokaler i teksten</button>
    <button>Fjern vokalene fra teksten</button>

    <input type="text" onchange="setText(this.value)">


    <div>Tekst: ${text}</div>
    <div>Antall bokstaver: ${numberOfLetters}</div>
    <div>Antall vokaler: ${numberOfVocals}</div>
  
`;

document.getElementById('app').innerHTML = html;
}




// Controller

// Her lager vi logikken i programmet vårt.
// Det må samsvare med model og view.


function setText(inputValue){
    text = String(inputValue);
    updateView();
}



// Printer ut hvor mange bokstaver som finnes i teksten

function printNumberOfLetters(){
    numberOfLetters = text.length;
    updateView();
}




// Teller antall vokaler 

function countVocals(){

    updateView();
}




// Kan fjerne alle vokalene fra teksten

function removeVocals(){

    updateView();
}












