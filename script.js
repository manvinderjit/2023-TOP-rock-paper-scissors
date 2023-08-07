const selectionOptions = ["rock", "paper", "scissors"];
const numberOfRounds = 5;

let playerScore = 0;
let computerScore = 0;

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

// function getPlayerChoice() {
//     let playerSelection = prompt(" Enter rock, paper, or scissors only!");
//     playerSelection = playerSelection.toLowerCase();
//     return playerSelection;        
// }

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

function playGame(playerSelection) {

    console.log(playerSelection);

    // for (let round = 0; round < numberOfRounds; round++){        
    //     console.log("Round " + (round + 1));
    //     console.log(playRound(playerSelection, getComputerChoice()));
    // }

    // console.log(findWinner());

}

// playGame();