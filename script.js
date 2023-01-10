




// Game's brains
// CONSIDER switching below if-else-statement to a switch-statement 
function playRound() {
    // The choices
    const rock = `Rock`
    const paper = `Paper`
    const scissors = `Scissors`

    // Computer's random choice
    function getComputerChoice() {
        const theChoice = [rock, paper, scissors];
        const random = Math.floor(Math.random() * theChoice.length);
        return theChoice[random];
    }
    const computerSelection = getComputerChoice();

    // Player's choice
    let playerSelection = prompt(`Choose either, Rock, Paper or Scissors to play!`)
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    // Brains of the game
    if (playerSelection == rock && computerSelection == scissors) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return `playerWinner`;
    } else if (playerSelection == paper && computerSelection == rock) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return `playerWinner`;
    }
    else if (playerSelection == scissors && computerSelection == paper) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return `playerWinner`;
    }
    else if (playerSelection == computerSelection) {
        console.log(`You Draw! ${computerSelection} and ${playerSelection} are the same!`)
        return `draw`;
    }
    else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return `computerWinner`;
    };
}




// 5 Game loop
function game() {
    // Scoreboard
    let computerScore = 0;
    let playerScore = 0;

    // Loop for 5 games
    for (let i = 1; i < 6; i++) {
        console.log(`This is the ${i} game`)

        let theGameFunction = playRound()
        theGameFunction;

        if (theGameFunction === `playerWinner`) {
            playerScore++;
        }
        else if (theGameFunction === `computerWinner`) {
            computerScore++;
        }
        else if (theGameFunction === `draw`) {
            computerScore++;
            playerScore++;
        }

        console.log(playerScore, computerScore)
    }

    // 5 Game loop outcome
    if (playerScore > computerScore) {
        console.log(`You Won, you beat the computer by 5 to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You Lost, you lost to the computer by ${playerScore} to 5`);
    } else if (playerScore === computerScore) {
        console.log(`You and the computer have drawn after 5 games`);
    }

}

game();