//get player one choice and compare.
function getPlayerOneChoice () { 
    let playChoice;
    //repeat if is not the required choice.
    do {
        playChoice = prompt("Choose between rock, scissor or paper:","");
        playChoice = playChoice.toLowerCase().trim();
    } while ((playChoice !== 'rock') && (playChoice !== 'scissor') && 
    (playChoice !== 'paper'));
    return playChoice;
}
//functions for computerPlay to work
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomPlay () {
    let playChoice = ['rock', 'scissor', 'paper'];
    const maxNumber = playChoice.length;
    //get random index array and return it
    playChoice = playChoice.at(getRandomInt(0, maxNumber));
    return playChoice;
}
//create a game() with arguments of the computerPlay and playerPlay:
function getGameMatch(playerSelection = getPlayerOneChoice(), 
computerSelection = getRandomPlay(), score_01 = 0, score_02 = 0) {
    //set initial score
    let playerScore = score_01;
    let computerScore = score_02;
    //test game matchs
    if (playerSelection == computerSelection) {
        console.log("Draw");
        playerScore++;
        computerScore++;
        return [playerScore, computerScore];
    } else if ((playerSelection == 'rock' && computerSelection == 'scissor') 
    || (playerSelection == 'scissor' && computerSelection == 'paper') 
    || (playerSelection == 'paper' && computerSelection == 'rock')) {
        console.log(`Win, ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        return [playerScore, computerScore];
    } else {
        console.log(`Lose, ${playerSelection} loses against ${computerSelection}`);
        computerScore++;
        return [playerScore, computerScore];
    }
} //return output expected: [1,0]; [1,1]; [0,0]
//hold player score
const playGameMatch = (rounds = 5) => {
    let playerOneScore = 0;
    let computerPlayScore = 0;
    let matchResult;
    //get match result and score
    for (let i = 0; i < rounds; i++) {
        matchResult = getGameMatch();
        playerOneScore = playerOneScore + matchResult[0];
        computerPlayScore = computerPlayScore + matchResult[1];
        console.log(`match score is: ${playerOneScore} vs ${computerPlayScore}`);
    }
    console.log(`final match score is: ${playerOneScore} vs ${computerPlayScore}`);
    return;
}

playGameMatch();
//2 vs 2
// console.log(`This is the playerOne choice: ${playerOne}`); // just for checking
// console.log(`This is the computer choice: ${computerPlay}`); // just for checking