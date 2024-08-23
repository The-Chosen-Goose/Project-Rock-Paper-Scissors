let icons = document.querySelectorAll('.icons div')
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
let player_score = 0;
let computer_score = 0;
let winner = document.querySelector('#winner')
let round_winner = document.querySelector('#round_winner')
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let round_number  = 0;
let winner_icon = document.createElement('img')
let note = document.querySelector('#note')
let start = document.querySelector('#start')
let reload = document.querySelector('#reload')
let playerchoice = ''
let computerchoice = ''
let computer_move = ''
let player_move = ''

function playround(player_move,computer_move) {
    if(((player_move == document.getElementById('rock') && (computer_move== document.getElementById('scissors')))) || 
       ((player_move == document.getElementById('paper')) && (computer_move == document.getElementById('rock')))|| 
       ((player_move == document.getElementById('scissors')) && (computer_move == document.getElementById('paper')))) {
            player_move.style.cssText = 'height:150px;width:146px;transition:.4s;border-color:#3333FF;transition:.3s'
            computer_move.style.cssText = 'height:150px;width:146px;transition:.4s;border-color:#dd153d;transition:.3s'
            player.innerHTML = `Player : ${++player_score}`
            round_winner.innerHTML = `Round ${++round_number} : You won - ${playerchoice} beats ${computerchoice}` 
    }

    else if(player_move == computer_move){
        player_move.style.cssText = 'height:150px;width:146px;border-color:#C031EE;transition:.4s'
        round_winner.innerHTML= `Round ${++round_number} : It's a tie`
    }

    else {
        player_move.style.cssText = 'height:150px;width:146px;transition:.4s;border-color:#3333FF;transition:.3s'
        computer_move.style.cssText = 'height:150px;width:146px;transition:.4s;border-color:#dd153d;transition:.3s'
        computer.innerHTML = `Computer : ${++computer_score}`
        round_winner.innerHTML = `Round ${++round_number} : You lost - ${computerchoice} beats ${playerchoice}` 
    }
}

function reseticons(){
    rock.style.cssText = 'height:140px;width:136px;border-color:black;transition:.4s'
    scissors.style.cssText = 'height:140px;width:136px;border-color:black;transition:.4s'
    paper.style.cssText = 'height:140px;width:136px;botder-color:black;transition.4s'
}

function getComputerChoice()
{
    let num = ((Math.random() * 10));

    if(num >= 0 && num <= 3){
        computer_move = document.getElementById('rock')
        computerchoice = 'ROCK'
    }

    else if (num > 3 && num <= 7){
        computer_move= document.getElementById('paper')
        computerchoice = 'PAPER'
    }

    else if (num > 7 && num <= 10){
        computer_move = document.getElementById('scissors')
        computerchoice = 'SCISSORS'
    }
}

function GameOver() {
    reseticons()
    round_winner.textContent = ''
    if(player_score == 5 && computer_score < 5){
        winner.style.color = '#FF6E10'
        winner.innerHTML = 'Hey You did it'
        winner_icon.src = 'css/images/medal.png'
    }
    else if (player_score < 5 && computer_score == 5){
        winner.style.color = '#de5d7b'
        winner.innerHTML = 'Better luck next time ...'
        winner_icon.src = 'css/images/game-over.png'
    }
    winner_icon.style.cssText = 'height:75px;width:75px'
    winner.append(winner_icon)
    note.innerHTML = 'Psst ... you might wanna checkout that reset button'
}

function playgame(){
    icons.forEach(element => { 
        element.addEventListener('click', () => {
            reseticons()
            if(element == document.getElementById('rock')){
                player_move = document.getElementById('rock')
                playerchoice = 'ROCK'
            }
            else if(element == document.getElementById('paper')){
                player_move = document.getElementById('paper')
                playerchoice = 'PAPER'
            }
            else if(element == document.getElementById('scissors')){
                player_move = document.getElementById('scissors')
                playerchoice = 'SCISSORS'
            }
            getComputerChoice()
           
           
            
            if(player_score < 5 && computer_score < 5){
                playround(player_move,computer_move)
            }
            else {
                GameOver()
            }
    })
    }
)
}

function resetgame(){
    player_score = 0;
    computer_score = 0;
    player.innerHTML = `Player : ${player_score}`;
    computer.innerHTML = `Computer : ${computer_score}`;
    round_winner.textContent = '';
    reseticons()
    round_winner.innerHTML = '';
    round_number = 0;
    computer_move = ''
    player_move = ''
    winner.innerHTML = ''
    winner_icon.src = ''
    note.innerHTML = ''
    playerchoice = ''
    computerchoice = ''
}

start.addEventListener('click', () => {
    start.style.cssText = 'background-color:white;transition:.6s';
    playgame();
})

reload.addEventListener('click', () => {
    resetgame();
})


