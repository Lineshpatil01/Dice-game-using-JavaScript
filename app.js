var ran1 = Math.floor(Math.random() *6) +1;
var ran2 = Math.floor(Math.random() *6) +1;
var randiceimage1 = "images/dice" + ran1 + ".png";
var randiceimage2 = "images/dice" + ran2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randiceimage1)
document.querySelectorAll("img")[1].setAttribute("src",randiceimage2)

if( ran1 > ran2) {
    document.querySelector("#refreshHeading").innerHTML = "player 1 wins"
} else if( ran2 > ran1 ) {
    document.querySelector("#refreshHeading").innerHTML = "player 2 wins"
}else {
    document.querySelector("#refreshHeading").innerHTML = "Draw"
}