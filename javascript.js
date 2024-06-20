function getComputerChoice() {
    let random = Math.random();

    if (random <= 0.33) {
        return "rock"
    }

    else if (random <= 0.67){
        return "paper"
    }
    
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    return choice.toLowerCase()
}

let humanScore;
let computerScore;
function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++
            console.log("You lose! Paper beats Rock")
        }
        else if (computerChoice == "scissors") {
            humanScore++
            console.log("You win! Rock beats Scissors")
        }
        else {
            computerScore++
            humanScore++
            console.log("Tie")
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore++
            console.log("You lose! Scissors beats Paper")
        }
        else if (computerChoice == "rock") {
            humanScore++
            console.log("You win! Paper beats Rock")
        }
        else {
            computerScore++
            humanScore++
            console.log("Tie")
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++
            console.log("You lose! Rock beats Scissors")
        }
        else if (computerChoice == "paper") {
            humanScore++
            console.log("You win! Scissors beats Paper")
        }
        else {
            computerScore++
            humanScore++
            console.log("Tie")
        }
    }
}

function playGame() {
    humanScore = 0
    computerScore = 0
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore) {
        return "FINAL SCORES! You: " + humanScore + "  Computer: " + computerScore + "  You are the winner!"
    }
    else if (computerScore > humanScore) {
        return "FINAL SCORES! You: " + humanScore + "  Computer: " + computerScore + "  You are the loser!"
    }
    else {
        return "FINAL SCORES! You: " + humanScore + "  Computer: " + computerScore + "  It was a tie. Play again!"
    }
}

console.log(playGame())



