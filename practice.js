
const R = 'Rock';
const P = 'Paper';
const S = 'Scissors';
let playerScore = 0;
let computerScore = 0;
const computerSelection = getRandomChoice();
const playerSelection = 'Rock';


function playRound(playerSelection, computerSelection){



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



