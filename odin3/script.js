let playerScore = 0;
let computerScore = 0;
let winner = ''
// Get Random number // 

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
console.log(getRandomArbitrary(1, 3));


/// Get Computer Choice //// 
function getComputerChoice() {
    let comChoice = getRandomArbitrary(1, 3)
    if (comChoice === 1) {
        return "Rock"
    }
    else if (comChoice === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }

}


//// Game Logic //// 
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase().length === computerSelection.toLowerCase().length) {
        return "It's a tie!" 
    } if (((playerSelection.toLowerCase()).length === 4) && (computerSelection.toLowerCase().length === 8)){
        return `"You Win! ${playerSelection} beats ${computerSelection}!"`
       
    } {
        playerScore++
        winner = 'player'
    }
     if (((playerSelection.toLowerCase()).length === 4) && (computerSelection.toLowerCase().length === 5)){
        return `"You Lose! ${computerSelection} beats ${playerSelection}!"`

    } {
        computerScore++
        winner = 'computer'
    }
     if (((playerSelection.toLowerCase()).length === 5) && (computerSelection.toLowerCase().length === 8)){
        return "You Lose! Scissors beats Paper!"
    }{
        computerScore++
        winner = 'computer'
    }
     if (((playerSelection.toLowerCase()).length === 5) && (computerSelection.toLowerCase().length === 4)){
        return "You Win! Paper beats Rock!"

    }{
        playerScore++
        winner = 'player'
    }
     if (((playerSelection.toLowerCase()).length === 8) && (computerSelection.toLowerCase().length === 4)){
        return "You Lose! Rock beats Scissors!"

    }{
        computerScore++
        winner = 'computer'
    }
     if (((playerSelection.toLowerCase()).length === 8) && (computerSelection.toLowerCase().length === 5)){
        return "You Win! Scissors beats Paper!"

    }{
        playerScore++
        winner = 'player'
    }
}

console.log(playRound("Rock", getComputerChoice()));
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();



function game() {
    for (let i = 0; i <= 5; i++) {
        let answer = prompt("Your choice?")
        console.log(playRound(answer, computerSelection));
        i++
    }
}
console.log(game());