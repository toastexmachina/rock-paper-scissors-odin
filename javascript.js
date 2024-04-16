// function to randomly return rock, paper, or scissors

// declare a function called getComputerChoice
// randomly return 1, 2, or 3
    //return a random fraction 
    // multiply by 3
    // add by 1 (can't be less than 1)
    // round the result down to the nearest integer
// conditonal if 1, then rock
// conditional if 2, then paper
// conditional if 3, then scissors
// variable to store the outcome
// return the result

let randomNumber = Math.floor(Math.random()*3 + 1);
console.log(randomNumber);

/* let computerChoice;
    
if (randomNumber === 1) {
    computerChoice = 'Rock';
} else if (randomNumber === 2) {
    computerChoice = 'Paper';
} else if (randomNumber === 3) {
    computerChoice = 'Scissors';
}
console.log(computerChoice); */

//Below looks cleaner

function getComputerChoice(x) {
    return (x == 1) ? 'Rock':
    (x == 2) ? 'Paper':
    (x == 3) ? 'Scissors' :
    "";
}
let computerSelection = getComputerChoice(randomNumber);
console.log(computerSelection);
