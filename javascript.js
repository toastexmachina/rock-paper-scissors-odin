// process to return a computer selection
let randomNumber = Math.floor(Math.random()*3 + 1);

function getComputerChoice(x) {
    return (x == 1) ? 'Rock':
    (x == 2) ? 'Paper':
    (x == 3) ? 'Scissors' :
    "";
}

// computer and player selection
let computerSelection = getComputerChoice(randomNumber).toLowerCase();
let playerSelection = prompt("What is your choice?");
playerSelection.toLowerCase();


// function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')) {
        return true;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return false;
    } else {
        return null;
    }
}

console.log(playRound(playerSelection, computerSelection));

// function to play a 5 round game that keeps score and reports a winner or loser at the end
// track wins and losses
// ignore ties
// alert score 
// end after five games
//

function playGame() {

}

// loop conditions p and c that tracks the number of wins.
for (let i=0; i<6; i++) {

}

