
const R = 'Rock';
const P = 'Paper';
const S = 'Scissors';
let playerScore = 0;
let computerScore = 0;
let score = 0;          // NOTE!!: When putting a var inside for loop, the loop resets the var.  Must put var in a larger scope to retain score/info!







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

    const game =(playerSelection)=> {
   
        for (let i = 0; i < 5; i++){


        
         let computerSelection = getRandomChoice();
    
    
            if (playerSelection == computerSelection){          //Having trouple updating score using if statement inside for loop
            console.log("Tie!!")
           }else  if (
                (playerSelection === 'Rock' && computerSelection === 'Scissors') ||     //The actual execution for the game, Tie, Win, or Lose.
                (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
                (playerSelection === 'Paper' && computerSelection === 'Rock')
        ){ score++;
            console.log("winner!  Your current score is " +score + '. The computer chose ' +computerSelection +' .' );
           }else if (
            (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
            (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
            (computerSelection === 'Paper' && playerSelection === 'Rock')
        ) { score--;
            console.log("LOSER! Your current score is " +score +' . The computer chose ' +computerSelection + ' .');
          
             }
        }
    };


   
  






