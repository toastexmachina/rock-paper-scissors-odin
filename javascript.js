
// Function that converts a random integer input of 1-3 into a computerSelection of "rock", "paper", or "scissors"
function getComputerChoice(x) {
    return (x == 1) ? 'Rock':
    (x == 2) ? 'Paper':
    (x == 3) ? 'Scissors' :
    "";
}

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

let results = document.querySelector("#results");

let pScore = 0;
let cScore = 0;

// score tracker
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

playerScore.textContent = `Player: ${pScore}`
computerScore.textContent = `Computer: ${cScore}`

function playGame(playerSelection) {
    let randomNumber = Math.floor(Math.random()*3 + 1);
    let computerSelection = getComputerChoice(randomNumber).toLowerCase();
    
    playRound(playerSelection, computerSelection);

    results.textContent = `You played ${playerSelection}. The Computer played ${computerSelection}`
}

// button event listener
let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissor = document.querySelector('.scissor');

btnRock.addEventListener("click", function(){
    playGame("rock");
});
btnPaper.addEventListener("click", function(){
    playGame("paper")
});
btnScissor.addEventListener("click", function(){
    playGame("scissor")
});

// function to play a game of 5 rounds and track wins and losses 
/*
// loop conditions p and c that tracks the number of wins.
    for (let i=0; i<5; i++) {
        let randomNumber = Math.floor(Math.random()*3 + 1);
        let computerSelection = getComputerChoice(randomNumber).toLowerCase();
        
        let playerSelection = prompt("Rock... Paper... Scissors... Shoot!");
        playerSelection.toLowerCase();
        
        playRound(computerSelection, playerSelection);
        alert("You played " + playerSelection + ". The computer played " + computerSelection + ".")
        alert("the player score is " + pScore + "." + "The computer score is " + cScore + ".")
        }
        */



