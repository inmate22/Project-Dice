var firstPlayerNumber = Math.floor(Math.random()*6) + 1;
var firstPlayerImage = "images/dice" + firstPlayerNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", firstPlayerImage);

var secondPlayerNumber = Math.floor(Math.random()*6) + 1;
var secondPlayerImage = "images/dice" + secondPlayerNumber + ".png";
document.querySelectorAll("img")[1].setAttribute("src", secondPlayerImage);

if(firstPlayerNumber > secondPlayerNumber){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(firstPlayerNumber < secondPlayerNumber){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "🚩 It's a draw! 🚩";
}