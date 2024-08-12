const container = document.querySelector("#container");

const rock = document.createElement("button");
const rockImg = document.createElement("img");
rockImg.src = "./rock.png";
rockImg.alt = "Rock";
rock.appendChild(rockImg);
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
container.appendChild(rock);

const paper = document.createElement("button");
const paperImg = document.createElement("img");
paperImg.src = "./paper.png";
paperImg.alt = "Paper";
paper.appendChild(paperImg);
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
container.appendChild(paper);

const scissors = document.createElement("button");
const scissorsImg = document.createElement("img");
scissorsImg.src = "./scissors.png";
scissorsImg.alt = "Scissors";
scissors.appendChild(scissorsImg);
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
container.appendChild(scissors);

const player = document.createElement("div");
const computer = document.createElement("div");
const roundResults = document.createElement("div");
container.appendChild(player);
container.appendChild(computer);
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
            player.textContent = "Player: Rock";
            computer.textContent = "Computer: Paper";
            roundResults.textContent = "You lose! Paper beats Rock";
        }
        else if (computerChoice == "scissors") {
            humanScore++
            player.textContent = "Player: Rock";
            computer.textContent = "Computer: Scissors";
            roundResults.textContent = "You win! Rock beats Scissors";
        }
        else {
            computerScore++
            humanScore++
            player.textContent = "Player: Rock";
            computer.textContent = "Computer: Rock";
            roundResults.textContent = "Tie";
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore++
            player.textContent = "Player: Paper";
            computer.textContent = "Computer: Scissors";
            roundResults.textContent = "You lose! Scissors beats Paper";
        }
        else if (computerChoice == "rock") {
            humanScore++
            player.textContent = "Player: Paper";
            computer.textContent = "Computer: Rock";
            roundResults.textContent = "You win! Paper beats Rock";
        }
        else {
            computerScore++
            humanScore++
            player.textContent = "Player: Paper";
            computer.textContent = "Computer: Paper";
            roundResults.textContent = "Tie";
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++
            player.textContent = "Player: Scissors";
            computer.textContent = "Computer: Rock";
            roundResults.textContent = "You lose! Rock beats Scissors";
        }
        else if (computerChoice == "paper") {
            humanScore++
            player.textContent = "Player: Scissors";
            computer.textContent = "Computer: Paper";
            roundResults.textContent = "You win! Scissors beats Paper";
        }
        else {
            computerScore++
            humanScore++
            player.textContent = "Player: Scissors";
            computer.textContent = "Computer: Scissors";
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