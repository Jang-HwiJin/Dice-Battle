// Creating a ranndom number for the dice roll
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


//Setting the image to the random dice roll on the left dice
var diceRoll1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceRoll1);

//Setting the image to the random dice roll on the right dice
var diceRoll2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceRoll2);


// Changing the heading depending on who won or draw
if (diceRoll1 > diceRoll2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (diceRoll1 < diceRoll2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
if (diceRoll1 == diceRoll2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
