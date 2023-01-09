/*
Oppgave:

Bruk en for-løkke til å printe ut 2-gangen.

Resultatet bør da liste ut tallene: 2,4,6,8,10,12,14,16,18,20 osv.
*/



// Model

let startNumber = 1;
let endNumber = 10;





// View

updateView()
function updateView(){
    html = /*HTML*/ `
    <button onclick="toGangen()">Vis to-gangen</button>
    <div></div>
    `;

    document.getElementById('app').innerHTML = html;
}





// Controller

/*
- Start-variabel "i" er lik startNumber/1.
- Løkka kjører så lenge "i" er mindre enn eller lik endNumber/10.
- Start-variablen øker med 1 per runde.

- Vi deklarerer en varibel "counterTimesTwo" og sier at den er lik telleren vår ganget med 2.

- Til slutt logger vi verdien til telleren vår (i) sammen med tekst og verdien til variabelen "counterTimesTwo".
- Da vil vi se dette i loggen: 
"1 ganget med 2 er 2"
"2 ganget med 2 er 4" 
osv. helt til vi kommer til 2 ganger 10.
*/

function toGangen(){
   for(let i = startNumber; i <= endNumber; i++){
    let counterTimesTwo = i * 2;
    
    console.log((`${i} ` + 'ganget med 2 er ' + `${counterTimesTwo}`));
   }
    
    updateView();
    
}
































