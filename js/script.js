    let score = JSON.parse(localStorage.getItem('score')) ||
       {
          wins: 0,
          losses: 0,
          ties: 0
        };
   
      updateScore();
      
      function updateScore(){
         document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove(){
        let computerMove = '';

        const randomNumber = Math.random();

        if(randomNumber < 1/3){
          computerMove = 'rock';
        }
        else if(randomNumber  < 2/3){
          computerMove = 'paper';
        }
        else{
          computerMove = 'scissors';
        }
        return computerMove;
      }

      function playgame(playerMove){

        let result = '';

        const computerMove = pickComputerMove();

        if(playerMove === 'rock'){

          if(computerMove === 'rock'){
            result = 'Tie.';
          }
          else if(computerMove === 'paper'){
            result = 'You lose.';
          }
          if(computerMove === 'scissors'){
            result = 'You won.'
          }
        }

        else if(playerMove === 'paper'){
          
          if(computerMove === 'rock'){
            result = 'You won.';
          }
          else if(computerMove === 'paper'){
            result = 'Tie.';
          }
          if(computerMove === 'scissors'){
            result = 'You lose.';
          }
        }

        if(playerMove === 'scissors'){
          
          if(computerMove === 'rock'){
            result = 'You lose.';
          }
          else if(computerMove === 'paper'){
            result = 'You won.';
          }
          if(computerMove === 'scissors'){
            result = 'Tie.';
          }
        }
      
        if(result === 'You won.'){
          score.wins++;
        }
        else if(result === 'You lose.'){
          score.losses++;
        }
        else if(result === `Tie.`){
          score.ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));
        
        document.querySelector('.js-result').innerHTML = `${result}`;
        
        document.querySelector('.js-move').innerHTML = `You ${playerMove} - ${computerMove} Computer`;

        updateScore();
}
