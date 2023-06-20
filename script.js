// OLD

// Game's brains
// // CONSIDER switching below if-else-statement to a switch-statement
// function playRound() {
//   // The choices
//   const rock = `Rock`;
//   const paper = `Paper`;
//   const scissors = `Scissors`;

//   // Computer's random choice
//   function getComputerChoice() {
//     const theChoice = [rock, paper, scissors];
//     const random = Math.floor(Math.random() * theChoice.length);
//     return theChoice[random];
//   }
//   const computerSelection = getComputerChoice();

//   // Player's choice
//   let playerSelection = prompt(
//     `Choose either, Rock, Paper or Scissors to play!`
//   );
//   playerSelection = playerSelection.toLowerCase();
//   playerSelection =
//     playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

//   // Brains of the game
//   if (playerSelection == rock && computerSelection == scissors) {
//     console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//     return `playerWinner`;
//   } else if (playerSelection == paper && computerSelection == rock) {
//     console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//     return `playerWinner`;
//   } else if (playerSelection == scissors && computerSelection == paper) {
//     console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//     return `playerWinner`;
//   } else if (playerSelection == computerSelection) {
//     console.log(
//       `You Draw! ${computerSelection} and ${playerSelection} are the same!`
//     );
//     return `draw`;
//   } else {
//     console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//     return `computerWinner`;
//   }
// }

// // 5 Game loop
// function game() {
//   // Scoreboard
//   let computerScore = 0;
//   let playerScore = 0;

//   // Loop for 5 games
//   for (let i = 1; i < 6; i++) {
//     console.log(`Game ${i}`);

//     let theGameFunction = playRound();
//     theGameFunction;

//     if (theGameFunction === `playerWinner`) {
//       playerScore++;
//     } else if (theGameFunction === `computerWinner`) {
//       computerScore++;
//     } else if (theGameFunction === `draw`) {
//       computerScore++;
//       playerScore++;
//     }

//     console.log(playerScore, computerScore);
//   }

//   // 5 Game loop outcome
//   if (playerScore > computerScore) {
//     console.log(
//       `Result: You Won, you beat the computer by 5 to ${computerScore}`
//     );
//   } else if (computerScore > playerScore) {
//     console.log(
//       `Result: You Lost, you lost to the computer by ${playerScore} to 5`
//     );
//   } else if (playerScore === computerScore) {
//     console.log(`Result: You and the computer have drawn after 5 games`);
//   }
// }

// game();

// AFTER 19TH JUNE 2023 - https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors

// Scoreboard Results
let computerScore = 0;
let playerScore = 0;

// Scoreboard Calculator
function score(result) {
  if (result == `playerWinner`) {
    playerScore++;
  } else if (result == `computerWinner`) {
    computerScore++;
  } else if (result == `draw`) {
    computerScore++;
    playerScore++;
  }
}

// Dom - Scoreboard
const scoreboard = document.querySelector("#scoreboard");

const roundResults = document.createElement("p");
scoreboard.appendChild(roundResults);

const gameResults = document.createElement("p");
scoreboard.appendChild(gameResults);

// Dom - Player's Choice Buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let playerSelection = ``;

rock.addEventListener("click", () => {
  playerSelection = `Rock`;
  playRound();
});

paper.addEventListener("click", () => {
  playerSelection = `Paper`;
  playRound();
});

scissors.addEventListener("click", () => {
  playerSelection = `Scissors`;
  playRound();
});

// The Game
function playRound() {
  // Computer's random choice
  function getComputerChoice() {
    const theChoice = [`Rock`, `Paper`, `Scissors`];
    const random = Math.floor(Math.random() * theChoice.length);
    return theChoice[random];
  }
  const computerSelection = getComputerChoice();

  // Brains of the game
  if (playerSelection == `Rock` && computerSelection == `Scissors`) {
    roundResults.textContent = `You Win! Rock beats Scissors`;
    score(`playerWinner`);
    gameResults.innerText = `Computer: ${computerScore} Player: ${playerScore}`;
  } else if (playerSelection == `Paper` && computerSelection == `Rock`) {
    roundResults.textContent = `You Win! Paper beats Rock`;
    score(`playerWinner`);
    gameResults.innerText = `Computer: ${computerScore} Player: ${playerScore}`;
  } else if (playerSelection == `Scissors` && computerSelection == `Paper`) {
    roundResults.textContent = `You Win! Scissors beats Paper`;
    score(`playerWinner`);
    gameResults.innerText = `Computer: ${computerScore} Player: ${playerScore}`;
  } else if (playerSelection == computerSelection) {
    roundResults.textContent = `You Draw! ${computerSelection} and ${playerSelection} are the same!`;
    score(`draw`);
    gameResults.innerText = `Computer: ${computerScore} Player: ${playerScore}`;
  } else {
    roundResults.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    score(`computerWinner`);
    gameResults.innerText = `Computer: ${computerScore} Player: ${playerScore}`;
  }

  // 5 Game Result
  if (playerScore === 5 && computerScore < 5) {
    gameResults.innerText = `Result: You Won, you beat the computer by 5 to ${computerScore}`;
    //Reset scores
    computerScore = 0;
    playerScore = 0;
  } else if (computerScore === 5 && playerScore < 5) {
    gameResults.innerText = `Result: You Lost, you lost to the computer by ${playerScore} to 5`;
    //Reset scores
    computerScore = 0;
    playerScore = 0;
  } else if (playerScore === 5 && computerScore === 5) {
    gameResults.innerText = `Result: You and the computer have drawn after 5 games`;
    //Reset scores
    computerScore = 0;
    playerScore = 0;
  }
}
