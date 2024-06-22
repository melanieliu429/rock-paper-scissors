const container = document.querySelector("#container");

const rock = document.createElement("button");
rock.textContent = "rock";
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
container.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "paper";
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
container.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "scissors";
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
container.appendChild(scissors);

const roundResults = document.createElement("div");
container.appendChild(roundResults);

const results = document.createElement("div");
container.appendChild(results);

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

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++
            roundResults.textContent = "You lose! Paper beats Rock";
        }
        else if (computerChoice == "scissors") {
            humanScore++
            roundResults.textContent = "You win! Rock beats Scissors";
        }
        else {
            computerScore++
            humanScore++
            roundResults.textContent = "Tie";
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore++
            roundResults.textContent = "You lose! Scissors beats Paper";
        }
        else if (computerChoice == "rock") {
            humanScore++
            roundResults.textContent = "You win! Paper beats Rock";
        }
        else {
            computerScore++
            humanScore++
            roundResults.textContent = "Tie";
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++
            roundResults.textContent = "You lose! Rock beats Scissors";
        }
        else if (computerChoice == "paper") {
            humanScore++
            roundResults.textContent = "You win! Scissors beats Paper";
        }
        else {
            computerScore++
            humanScore++
            roundResults.textContent = "Tie";
        }
    }
    displayScore();
}

function displayScore() {
    if(humanScore > computerScore && humanScore % 5 == 0) {
        results.textContent = "FINAL SCORE - You: " + humanScore + " Opponent: " + computerScore;
    }
    else if(humanScore < computerScore && computerScore % 5 == 0) {
        results.textContent = "FINAL SCORE - You: " + humanScore + " Opponent: " + computerScore;
    }
    else if(humanScore == computerScore && humanScore % 5 == 0) {
        results.textContent = "FINAL SCORE - You: " + humanScore + " Opponent: " + computerScore;
    }
    else {
        results.textContent = "Score: " + humanScore + " Opponent: " + computerScore;
    }
}