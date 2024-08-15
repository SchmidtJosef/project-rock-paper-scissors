const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const computerButton = document.querySelector('#computerButton');
const runningScore = document.querySelector('.running-score');
const winnerBox = document.querySelector('.winnercall');
const humanImage = document.querySelector('.image-box.human img');
const computerImage = document.querySelector('.image-box.computer img');
const choices = document.querySelector("#user-choice");

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        computerButton.textContent = 'ROCK';
        displayChoiceImage('rock',computerImage);
        return 'rock';
    } else if (choice === 1) {
        computerButton.textContent = 'PAPER';
        displayChoiceImage('paper',computerImage);
        return 'paper';
    } else if (choice === 2) {
        computerButton.textContent = 'SCISSORS';
        displayChoiceImage('scissors',computerImage);
        return 'scissors';
    } else {
        return 'something went wrong';
    }
}

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
        displayScore();
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

choices.addEventListener('click', function(e) {
    let target = e.target;
    displayChoiceImage(target.id);
    playRound(target.id);
});