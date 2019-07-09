let userScore=0;
let computerScore =0;

// DOM Variables 
//tell with Span tag and with "_" underscore
//Highly recommended
//caching the dom = storing Dom for future use.
//caching= storing sth for future use;
//why caching?
//Ans. = better performance factor
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissors_div =document.getElementById("s");



function convertToWord(letter)
{
    if(letter === 'r') return "Rock";
    else if(letter === 'p') return "Paper";
     return "Scissors";

}
// Who win >> user!
function win(tempUserChoice, tempComputerChoice)
{
   // increase user score
   userScore++;

   //update "User wins" result text
   const smallUserWord = "user".fontsize(3).sub();
   const smallCompWord = "comp".fontsize(3).sub();
   userScore_span.innerHTML= userScore;
   computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(tempUserChoice)}${smallUserWord} beats ${convertToWord(tempComputerChoice)}${smallCompWord}. You win.`;
   
   // green-glow
   const userChoice_div = document.getElementById(tempUserChoice);
   userChoice_div.classList.add('green-glow');
    setTimeout( () => userChoice_div.classList.remove('green-glow'),400);

}
//who lose user;
function lose(tempUserChoice, tempComputerChoice)
{
    // increase computer score
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
   
    //Update "user loses" text
    const smallUserWord = "user".fontsize(3).sub();  
    const smallCompWord = "comp".fontsize(3).sub();
   result_p.innerHTML = `${convertToWord(tempUserChoice)}${smallUserWord} loses ${convertToWord(tempComputerChoice)}${smallCompWord}. You lost.`;

   // red-glow
    const userChoice_div = document.getElementById(tempUserChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout( () => userChoice_div.classList.remove('red-glow'),400);


//    const userChoice_div = document.getElementById(tempUserChoice);
//    userChoice_div.classList.add('red-glow');
//     setTimeout( () =>  userChoice_div.classList.remove('red-glow'),400);
}

function draw(tempUserChoice, tempComputerChoice)
{
    
    //!No update of user and comp scores;

    //Update "It's a draw" text
    const smallUserWord = "user".fontsize(3).sub();  
    const smallCompWord = "comp".fontsize(3).sub();
   result_p.innerHTML = `${convertToWord(tempUserChoice)}${smallUserWord} equals ${convertToWord(tempComputerChoice)}${smallCompWord}. It's a draw.`;

   //Gray-glow
   const userChoice_div = document.getElementById(tempUserChoice);
   userChoice_div.classList.add('gray-glow');
    setTimeout( () =>  userChoice_div.classList.remove('gray-glow'),400);
}

function getComputerChoice()
{

    const choices = ['r','p','s'];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
    
}

function game(userChoice)
{
   const computerChoice = getComputerChoice();
//    console.log("comp choice: " + computerChoice);
//    console.log("user choice: " + userChoice);

   switch(userChoice + computerChoice)
   {
       case"rs":
       case"pr":
       case"sp":
       win(userChoice , computerChoice);
       break;

       case"rp":
       case"sr":
       case"ps":
        lose(userChoice , computerChoice);
       break;

       case"rr":
       case"ss":
       case"pp":
       draw(userChoice , computerChoice);
       break;
   }
   
}
// add event listener
function main()
{
    rock_div.addEventListener('click', () => game("r"));
    
    paper_div.addEventListener('click',() => game("p"));

    scissors_div.addEventListener('click',() => game("s"));
}

main();

