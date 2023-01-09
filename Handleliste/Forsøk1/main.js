/*
Skriv på nytt, få det til å sitte

Handleliste

Bruk MVC, variabler, arrays og for-løkker for å løse oppgaven.


Lag din egen handleliste der man kan:


- Vise alle varer som er lagt til i handlelisten

- Legge til ny vare

- Slette en valgt vare

- Endre navn på en valgt vare
*/



// Model

let shoppingCart = [];
let items = ["kiwi","banan",];
let searchBar = "";







// View

updateView()
function updateView(){

    html = "";
    for(let i = 0; i <= items.length; i++){
        html += /*HTML*/ `
        <li>
        ${items[i]}
        <button onclick="changeNameForChosenItem(${i})">Endre verdi</button>
        <button onclick="deleteChosenItem(${i})">Fjern</button>

        </li>
        `;
        
    }
    html += /*HTML*/ `<input oninput="searchBar = this.value" type="text"> <button onclick="addItem(searchBar)">Legg til</button>`;
    
  
   
    document.getElementById('app').innerHTML = html;
}




// Controller


// Funksjon for å legge til vare

function addItem(item){
    let shoppingItem = items.push(item)
    console.log(shoppingItem);
    updateView();
}



// Skriver index pga koden skal gi mening (vi bruker indexen)

// Funksjon for å slette en valgt vare

function deleteChosenItem(index){
    items.splice(index, 1)
    updateView();
}



// Funksjon for å endre navn på en valgt vare

function changeNameForChosenItem(index){
    items[index] = searchBar;
    updateView();
}





