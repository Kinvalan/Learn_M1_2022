/*
Handleliste

Bruk MVC, variabler, arrays og for-løkker for å løse oppgaven.


Lag din egen handleliste der man kan:


- Vise alle varer som er lagt til i handlelisten

- Legge til ny vare

- Slette en valgt vare

- Endre navn på en valgt vare
*/



// Model

let listItems = ["Eple", "Appelsin", "Banan"];
let shoppingCart = [];
let inputValue = "";




// View

updateView()
function updateView(){
    html = "";

    for(let i = 0; i <= listItems.length; i++){
        html += /*HTML*/ `
        <li>
        ${listItems[i]}
        <button onclick="changeNameForChosenItem(${i})">Endre navn</button>
        <button onclick="removeChosenItem(${i})">Fjern</button>
        </li>
        `;
 
    }
     
        html += /*HTML*/ `
        <input type="text" oninput="inputValue = this.value">
        <button onclick="addItem(inputValue)">Legg til vare</button>
        `;

        document.getElementById('app').innerHTML = html;

}



// Controller


/* 
Tror det oninput="inputValue = this.value" i inputen gjør er:

- Når noe skrives i input så kalles "inputValue" variablen. 
- Den blir satt lik til this.value
- Tror this.value blir lik det det parameteret som den funskjonen man kaller har.

- F.eks: function addItem(item).
- Her blir inputValue = "item" parameteret.
*/




// Legge til en vare

/*
- Lager en ny funskjon "addItem", den får parameteret "item".
- Vi deklarerer en ny variabel "shoppingItem" og setter den lik arrayet vårt (listItems) og skriver .push(item).
- Da vil vi putte item-parameteret bakerst i arrayet vårt (listItems).
- Her blir "item" den nye varen i shoppingCart. 


*/

function addItem(item){
    let shoppingItem = listItems.push(item)
    updateView();
}



// Fjerne valgt vare

/*
Skriver indexParameter pga. koden skal gi mening (vi bruker indexen)

Det "listItems.splice(indexParameter, 1)" gjør her er:

- Splicer arrayet "listItems"
- Første parameter(indexParameter) er stedet i arrayet som vi starter å fjerne elementer.
- Andre parameter (1) er hvor mange elementer som skal fjernes.
 
- Så vi "splicer" og starter å fjerne elementer fra indexParameter, og fjerner ett element.
*/

function removeChosenItem(indexParameter){
    listItems.splice(indexParameter, 1)
    updateView();
} 




// Endre navn på valgt vare

/*
- Lager en funskjon ved navn: "changeNameForChosenItem".
- Lar funksjonen ha parameteret: "indexParameter".

- Vi tar arrayet vårt "listItems" ved indexen "indexParameter" og setter den lik inputValue variablen vår. 
- Det gjør vi fordi da blir det vi skriver inn (inputValue) det samme som arrayet "listItems" med indexen "indexParameter".

- Grunnen til at vi vil det er at da blir det vi skriver inn etter å ha trykka på "endre navn"- knappen det nye navnet. 

- Jeg tror det som skjer er at koden finner den varen man endrer på ved hjelp av indexen.
- Så blir det man skrev inn, det nye navnet på varen. 
*/

function changeNameForChosenItem(indexParameter){
    listItems[indexParameter] = inputValue;
    updateView();
}









