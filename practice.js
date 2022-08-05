
const R = 'Rock';
const P = 'Paper';
const S = 'Scissors';
let playerScore = 0;
let computerScore = 0;
let computerSelection = getRandomChoice();
let playerSelection = prompt("Choose Rock, Paper, or Scissors");


function getRandomChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
        case 0:
            return R
        case 1:
            return P    
        case 2:
            return S
    }




}  






function playRound(playerSelection, computerSelection){
   if (playerSelection == computerSelection){
    console.log("Tie!!")
   }
   else  if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
){console.log("Winner!");
} else if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock')
) { console.log("LOSER");

}


}







playRound(playerSelection, computerSelection);