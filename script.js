const selectionOptions = ["rock", "paper", "scissors"];
const numberOfRounds = 5;

let playerScore = 0;
let computerScore = 0;
let remainingRounds = numberOfRounds;
let currentRound = 1;

function getComputerChoice() {
    return selectionOptions[Math.floor(Math.random()*selectionOptions.length)];    
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    let playRoundResult;

    switch(true) {
        
        case (playerSelection == "rock" && computerSelection == "paper"):
            computerScore++;
            playRoundResult =  ("You Lose! Paper beats Rock!");
            break;

        case (playerSelection == "rock" && computerSelection == "scissors"):
            playerScore++;
            playRoundResult =  ("You Win! Rock beats Scissors!");
            break;

        case (playerSelection == "scissors" && computerSelection == "paper"):
            playerScore++;
            playRoundResult =  ("You Win! Scissors beat Paper!");
            break;

        case (playerSelection == "scissors" && computerSelection == "rock"):
            computerScore++;
            playRoundResult =  ("You Lose! Rock beats Scissors!");
            break;
        
        case (playerSelection == "paper" && computerSelection == "rock"):
            playerScore++;
            playRoundResult = ("You Win! Paper beats Rock!");
            break;

        case (playerSelection == "paper" && computerSelection == "scissors"):
            computerScore++;
            playRoundResult = ("You Lose! Scissors beats Paper!");
            break;

        default:
            playRoundResult = ("It's a tie!");
    }
    
    return playRoundResult;
    
}

function findWinner(){
    if(playerScore > computerScore){
        return ("Game over!: Player Wins by " + playerScore + " : " + computerScore);
    }else if(playerScore < computerScore){
        return ("Game over!: Computer Wins by " + computerScore + " : " + playerScore);
    }else if (playerScore == computerScore){
        return ("Game over!: It's a tie!");
    }else{
        return ("Game over!: Invalid result!");
    }
}

function displayRoundResult(roundResult){
    const roundResultPara = document.createElement("p");
    roundResultPara.innerHTML = `Round ` + `${currentRound}` + `<br>` + `${roundResult}`;
    document.getElementById("result-area").appendChild(roundResultPara);
}

function displayFinalResult(){
    const resultPara = document.createElement("p");
    resultPara.innerHTML = `Final Result: ` + `<br>` + `${findWinner()}`;
    document.getElementById("result-area").appendChild(resultPara);
}

function playGame(playerSelection) {
    
    if (remainingRounds === 0){
        alert("Game Over!");
    }

    if(currentRound >= 1 && currentRound <= 5){
        displayRoundResult(playRound(playerSelection, getComputerChoice())); 

        currentRound++;

        if(currentRound > 5){
            displayFinalResult();
        }
    } 
   
}