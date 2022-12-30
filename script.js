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

// Case-Insensitive Helper
// Converts the argument into lowercase then capitalizes the first letter

// function caseInsensitive(a) {
//     let lowerCaseFull = a.toLowerCase();
//     let capitalFirstLetter = lowerCaseFull.charAt(0).toUpperCase() + lowerCaseFull.slice(1);
//     return capitalFirstLetter;
// }
// TEST OF CASE-INSENSITIVE
// const playerSelection2 = prompt(`Choose either, Rock, Paper or Scissors to play!`)
// console.log(caseInsensitive(playerSelection2))



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
function playRound(playerSelection, computerSelection) {

    if (playerSelection == rock && computerSelection == scissors) {
        alert(`You Win! ${playerSelection} beats ${computerSelection}`)

    } else if (playerSelection == paper && computerSelection == rock) {
        alert(`You Win! ${playerSelection} beats ${computerSelection}`)

    }
    else if (playerSelection == scissors && computerSelection == paper) {
        alert(`You Win! ${playerSelection} beats ${computerSelection}`)

    }
    else if (playerSelection == computerSelection) {
        alert(`You Draw! ${computerSelection} and ${playerSelection} are the same!`)
    }
    else {
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`)
    };
    return
}

// // Playing prerequisites
const computerSelection = getComputerChoice();

let playerPrompt = prompt(`Choose either, Rock, Paper or Scissors to play!`)
const caseInsensitivePart1 = playerPrompt.toLowerCase();
const caseInsensitivePart2 = caseInsensitivePart1.charAt(0).toUpperCase() + caseInsensitivePart1.slice(1);
let playerSelection = caseInsensitivePart2;

// The Game without score keeping
playRound(playerSelection, computerSelection);


// The Game with score keeping
function game() {
    for (let i = 0; i < 5; i++) {
        playRound((playerSelection, computerSelection));
        //alert winner or looser at the end
    }
}







/* NOTES

Keeping score
    When the user inputs their option
    My game receives it, generates an option for the pc, decides who wins, shows who wins by alert function then
    Returns nothing 
    -- i need to return the winner into a variable or loop to keep track
    -- the loop will repeat the game 5 times - while my variable/loop above keeps track (i dont make sense here sorry lol)


*/
