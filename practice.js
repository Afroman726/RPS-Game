
const R = 'Rock';
const P = 'Paper';
const S = 'Scissors';
let playerScore = 0;
let computerScore = 0;
const computerSelection = getRandomChoice();
const playerSelection = getRandomChoice();


    function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("Tie!!");
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
){console.log("Winner!");
} else if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
) { console.log("LOSER");

}


}




function getRandomChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }




}


 
playRound();