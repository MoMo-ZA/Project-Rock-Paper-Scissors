/* NOTES
0 Rules for the game
    
    rock beats scissors
    paper beats rock
    scissors beats paper
    
    rock>scissors
    paper>rock
    scissors>paper

    const rule1 = 'Rock' > 'Scissors' 
    const rule2 = 'Paper' > 'Rock'
    const rule3 = 'Scissors' > 'Paper'
    
1 Create function getComputerChoice
    This will randomly RETURN 'Rock,Paper or Scissors'
2 Create function playRound
    This function must have two parameters [playerSelection & computerSelection]
    - Process
    Take parameter one and two and compare the results with a set of rules
    
    - Goal
    Return string that states the winner ["You Lose! Paper beats Rock"]
    Make [playerSelection] parameter case-insensitive

-- Focus on below later - 3:45pm 28/12/22

3 Create function Game    
    This function will play 5 rounds and keep score and then report the winner at the end
    Call the playRound function inside this function
*/




// The Options
const rock = `Rock`
const paper = `Paper`
const scissors = `Scissors`


// Computer's random choice
function getComputerChoice() {
    const theChoice = [rock, paper, scissors];
    const random = Math.floor(Math.random() * theChoice.length);
    return theChoice[random];
}


// Game's brains
// CONSIDER switching below if-else-statement to a switch-statement 
function playRound(playerSelectionCaseInsensitive, computerSelection) {

    if (playerSelectionCaseInsensitive == rock && computerSelection == scissors) {
        console.log(`You Win! ${playerSelectionCaseInsensitive} beats ${computerSelection}`)

    } else if (playerSelectionCaseInsensitive == paper && computerSelection == rock) {
        console.log(`You Win! ${playerSelectionCaseInsensitive} beats ${computerSelection}`)

    }
    else if (playerSelectionCaseInsensitive == scissors && computerSelection == paper) {
        console.log(`You Win! ${playerSelectionCaseInsensitive} beats ${computerSelection}`)

    }
    else if (playerSelectionCaseInsensitive == computerSelection) {
        console.log(`You Draw! ${computerSelection} and ${playerSelectionCaseInsensitive} are the same!`)
    }
    else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelectionCaseInsensitive}`)
    }
}


// The Game
function game() {
    playRound()
}


// Playing the game
const playerSelection = `rock`
const caseInsensitivePart1 = playerSelection.toLowerCase();
const caseInsensitivePart2 = caseInsensitivePart1.charAt(0).toUpperCase() + caseInsensitivePart1.slice(1);
const playerSelectionCaseInsensitive = caseInsensitivePart2

const computerSelection = getComputerChoice();
console.log(playRound(playerSelectionCaseInsensitive, computerSelection));




/* NOTES

function caseInsensitivity(playerSelection) {
    const caseInsensitivePart1 = playerSelection.toLowerCase();
    const caseInsensitivePart2 = caseInsensitivePart1.charAt(0).toUpperCase() + caseInsensitivePart1.slice(1);
}
*/
