// Function that converts a random integer input of 1-3 into a computerSelection of "rock", "paper", or "scissors"
function getComputerChoice(x) {
    return (x == 1) ? 'rock':
    (x == 2) ? 'paper':
    (x == 3) ? 'scissors' :
    "";
}

// function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        pScore++
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        cScore++
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

    playerScore.textContent = `Player: ${pScore}`
    computerScore.textContent = `Computer: ${cScore}`
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
    playGame("scissors")
});