
const R = 'Rock';
const P = 'Paper';
const S = 'Scissors';
let playerScore = 0;
let computerScore = 0;







function getRandomChoice(){             //This is the logic for the computer picking Rock Paper or Scissors
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
        case 0:
            return R
        case 1:
            return P    
        case 2:
            return S
    }




};  

    const game =()=> {
    let rounds= prompt('How many rounds would you like to play?');
        for (let i = 0; i < rounds; i++){

         let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        
         let computerSelection = getRandomChoice();
        let score = 0;
    
    
            if (playerSelection == computerSelection){
            console.log("Tie!!")
           }else  if (
                (playerSelection === 'Rock' && computerSelection === 'Scissors') ||     //The actual execution for the game, Tie, Win, or Lose.
                (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
                (playerSelection === 'Paper' && computerSelection === 'Rock')
        ){ score++;
            console.log("winner!  Your current score is " +score + '.' );
           }else if (
            (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
            (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
            (computerSelection === 'Paper' && playerSelection === 'Rock')
        ) { score--;
            console.log("LOSER! Your current score is " +score +' .');
          
             }
        }
    };


   

game()







