const selectionOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return selectionOptions[Math.floor(Math.random()*selectionOptions.length)];    
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    let playRoundResult;

    switch(true) {
        
        case (playerSelection == "rock" && computerSelection == "paper"):
            playRoundResult =  ("You Lose! Paper beats Rock!");
            break;

        case (playerSelection == "rock" && computerSelection == "scissors"):
            playRoundResult =  ("You Win! Rock beats Scissors!");
            break;

        case (playerSelection == "scissors" && computerSelection == "paper"):
            playRoundResult =  ("You Win! Scissors beat Paper!");
            break;

        case (playerSelection == "scissors" && computerSelection == "rock"):
            playRoundResult =  ("You Lose! Rock beats Scissors!");
            break;
        
        case (playerSelection == "paper" && computerSelection == "rock"):
            playRoundResult = ("You Win! Paper beats Rock!");
            break;

        case (playerSelection == "paper" && computerSelection == "scissors"):
            playRoundResult = ("You Lose! Scissors beats Paper!");
            break;

        default:
            playRoundResult = ("It's a tie!");
    }
    
    return playRoundResult;
    
}

function game() {

    console.log(playRound("scissors", "rock"));

}

game();