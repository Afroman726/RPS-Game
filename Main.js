
const R = 'Rock';
const P = 'Paper';
const S = 'Scissors';
let playerScore = 0;
let computerScore = 0;
let score = 0;   // NOTE!!: When putting a var inside for loop, the loop resets the var.  Must put var in a larger scope to retain score/info!



    const game =(playerSelection)=> {
        
        const score_Visual = document.getElementById('display_Score').innerHTML= 'Your total score is: ' +score;

        const getRandomChoice=() =>{
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
        getRandomChoice();
        let computerSelection = getRandomChoice();
        const display_Choices = document.getElementById('choices').innerHTML= 'You chose ' +playerSelection +'.  The computer chose ' +computerSelection;

    
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
        };
    



    const rbtn = document.querySelector('rock');
rock.addEventListener('click' , () => {
  
  game(R);
});
   
const pbtn = document.querySelector('paper');
paper.addEventListener('click' , () =>{
    game(P);
});

const sbtn = document.querySelector('scissors');
scissors.addEventListener('click' , () =>{
    game(S);
});








