let x;
let y;
let z;    //Three variables are declared with the names of x, y and z.

document.getElementById("rollButton").onclick = function() {  // An element with the id "rollButton" is fetched when the user clicks and that is set equal to the function. 
    x = Math.floor(Math.random()*6) + 1;
    y = Math.floor(Math.random()*6) + 1;
    z = Math.floor(Math.random()*6) + 1;   // These variables get set to be equal to a random number between 0 and 6 and are rounded down.

    document.getElementById("xlabel").innerHTML=x;
    document.getElementById("ylabel").innerHTML=y;
    document.getElementById("zlabel").innerHTML=z;  // The content of the elements with the id we chose are set equal to the variables we've made.
}