//generating two random numbers
let diceOne = Math.floor(Math.random() * 6) + 1;
let diceTwo = Math.floor(Math.random() * 6) + 1;

//diplaying dice
document.querySelector(".img1").setAttribute("src", `images/dice${diceOne}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${diceTwo}.png`);

//checking who won or if it was a draw
let message;

if (diceOne === diceTwo) {
    message = "Draw!";
} else {
    message = diceOne > diceTwo ? "⭐Player 1 Wins!" : "Player 2 Wins!⭐";
}

//displaying winner
document.querySelector("h1").innerText = message;
