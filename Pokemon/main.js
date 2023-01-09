
/*
Denne oppgaven løser du med: MVC, Variabler, Math.random(), Arrays og Ternary Operator.


Oppgaven går ut på å lage et lite spill hvor man møter på tilfeldige pokémon og kan enten fange dem, 
eller rømme fra dem. 

Velger man å fange, lagres pokémonen i "inventoryet" ditt. 
Dette skal kunne vises/ikke vises ved å trykke på én knapp.

Bestem hvilke pokémon du ønsker å ha med i spillet og legg disse i et array

Lag logikk for å møte på en tilfeldig pokémon
Lag muligheter for å fange eller rømme fra en pokémon
Lag en "vis mine pokemon on/off" knapp og få den til å fungere som nevnt i teksten ovenfor nummerlisten her.
*/


/*
Syntaxen for ternary operator: 

condition ? expression1 : expression2

Ternary operatoren evaluerer test tilstanden.

Hvis tilstanden er sann, så blir expression1 utført.
Hvis tilstanden er usann, så blir expression2 utført.
*/




// Model

let availablePokemon = ["Darkrai", "Giratina", "Machamp", "Mudkip"];
let randomPokemon = "Torchic";
let inventory = [];
let isDisplayingPokemon = false;




// View

updateView()
function updateView(){
    let html = /*HTML*/ `
    You encountered a wild ${randomPokemon}! <br>

    <button onclick="catchPokemon()">Catch this pokemon</button>
    <button onclick="getRandomPokemon()">Run into the grass</button>
    <br> <button onclick="displayPokemon()">Show all of my pokemon</button> <br>

    ${isDisplayingPokemon ? inventory : ""}
    `;

    document.getElementById('app').innerHTML = html;
}






// Controller


/*
For å vise fram pokemon navn-teksten. 

- Setter isDisplayingPokemon = true.
*/

function displayPokemon(){
    isDisplayingPokemon = !isDisplayingPokemon;
    updateView();
}




/*
For å få opp en tilfeldig pokemon-navn-tekst.

- Lager en ny variabel ved navn "randomPokemonIndex"
- Denne variabelen settes lik et tilfeldig helt tall ganger arrayet "availablePokemon" sin lengde.
- Det vil si at randomPokemonIndex blir ett tilfeldig element i availablePokemon arrayet.
- F.eks "Darkrai".

- Så settes randomPokemon variablemen lik availablePokemon med indexen randomPokemonIndex.
- Det vil si at randomPokemon nå er lik et tilfeldig element i arrayet availablePokemon.
*/

function getRandomPokemon(){
    let randomPokemonIndex = Math.floor(Math.random() * availablePokemon.length)
    randomPokemon = availablePokemon[randomPokemonIndex];
    updateView();
}



/* 
For å legge til den pokemonen man finner sitt navn i arrayet "inventory".

- randomPokemon (tilfeldig element i availablePokemon) blir lagt til å enden av inventory arrayet.
*/

function catchPokemon(){
    inventory.push(randomPokemon);
    console.log(availablePokemon);
    updateView();
}


















