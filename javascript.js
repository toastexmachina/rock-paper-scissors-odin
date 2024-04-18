/*
// process to return a computer selection
let randomNumber = Math.floor(Math.random()*3 + 1);
*/

function getComputerChoice(x) {
    return (x == 1) ? 'Rock':
    (x == 2) ? 'Paper':
    (x == 3) ? 'Scissors' :
    "";
}
/*
// computer and player selection
let computerSelection = getComputerChoice(randomNumber).toLowerCase();
let playerSelection = prompt("What is your choice?");
playerSelection.toLowerCase();
*/

// function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')) {
        pScore = pScore + 1;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        cScore = cScore + 1;
    } else {
        pScore = pScore;
        cScore = cScore;
    }
}

// function to play a 5 round game that keeps score and reports a winner or loser at the end
    // create variables that update the score for each player
       // pScore = pScore + 1;
       // cScore = sScore + 1;
// track wins and losses
// ignore ties
// alert score 
     //   alert(pScore, cScore);
// end after five games
//

function playGame() {
    pScore = 0;
    cScore = 0;
// loop conditions p and c that tracks the number of wins.
    for (let i=0; i<6; i++) {
        let randomNumber = Math.floor(Math.random()*3 + 1);
        let computerSelection = getComputerChoice(randomNumber).toLowerCase();
        
        let playerSelection = prompt("What is your choice?");
        playerSelection.toLowerCase();
        
        playRound(computerSelection, playerSelection);
        alert("the player score is " + pScore + "." + "The computer score is " + cScore + ".")
        }
}
console.log(playGame());


