const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const computerButton = document.querySelector('#computerButton');
const runningScore = document.querySelector('.running-score');
const winnerBox = document.querySelector('.winnercall');
const humanImage = document.querySelector('.image-box.human img');
const computerImageBox = document.querySelector('.image-box.computer');
let choices = document.querySelector("#user-choice");



function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        computerButton.textContent = 'ROCK';
        return 'rock';
    } else if (choice === 1) {
        computerButton.textContent = 'PAPER';
        return 'paper';
    } else if (choice === 2) {
        computerButton.textContent = 'SCISSORS';
        return 'scissors';
    } else {
        return 'something went wrong';
    }
}

// function getHumanChoice() {
//     let choice = prompt('Type your choice!').toLowerCase();
//     if (choice == 'rock'||choice=='paper'||choice=='scissors') {
//         return choice;
//     } else {
//         alert('Wrong input!');
//         getHumanChoice();
//     }
// }

let humanScore = 0;
let computerScore = 0;

function displayScore() {
    runningScore.textContent = `${humanScore} - ${computerScore}`;
}

function resetScore() {
    humanScore = computerScore = 0;
}

function displayChoiceImage(choice,img=humanImage) {  
    if(choice==='rock') {
        img.src = './images/rock.jpeg';
        img.alt = 'ROCK image';
    } else if(choice==='paper') {
        img.src = './images/paper.jpeg';
        img.alt = 'PAPER image';
    } else if(choice==='scissors') {
        img.src = './images/scissors.jpeg';
        img.alt = 'SCISSORS image';
    } else alert('Something went wrong!')
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        winnerBox.textContent = `Tie! Both have choosen ${humanChoice}`;
    } else if(humanChoice==='rock'&&computerChoice==='paper'||humanChoice==='paper'&&computerChoice==='scissors'||humanChoice==='scissors'&&computerChoice==='rock') {
        computerScore++;
        displayScore();
        if(computerScore===5) {
            winnerBox.textContent = 'YOU LOSE :(';
            resetScore();
        } else winnerBox.textContent = `${computerChoice} beats ${humanChoice}`;
    } else if(humanChoice==='rock'&&computerChoice==='scissors'||humanChoice==='paper'&&computerChoice==='rock'||humanChoice==='scissors'&&computerChoice==='paper') {
        humanScore++;
        displayScore();
        if(humanScore===5) {
            winnerBox.textContent = 'YOU WIN!!!';
            resetScore();
        } else winnerBox.textContent = `${humanChoice} beats ${computerChoice}`;
    }
}
  
function playGame() {
    let n = 0;
    for(n=1;n<=5;n++) {
        playRound();
        n = humanScore+computerScore;
    }
    (humanScore>computerScore) ? console.log('You win the game!') : console.log('The computer win the game!')
}

// rockButton.addEventListener('click', playRound('rock'));
// paperButton.addEventListener('click', playRound('paper'));
// scissorsButton.addEventListener('click', playRound('scissors'));

choices.addEventListener('click', function(e) {
    let target = e.target;

    displayChoiceImage(target.id);

    playRound(target.id);

    // switch(target.id) {
    //     case 'rock':
    //         playRound('rock');
    //         break;
    //     case 'paper':
    //         playRound('paper');
    //         break;
    //     case 'scissors':
    //         playRound('scissors');
    //         break;
    // }
});