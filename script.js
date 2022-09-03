const gameOptions = ["Rock", "Paper", "Scissors"];
const messageEl = document.getElementById("message");
const progressEl = document.getElementById("progress-el");
const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');
const computerEl = document.getElementById('computer');
const roundEl = document.getElementById('round');


rockEl.addEventListener('click', (e) => {
    letsGame('rock');
})

paperEl.addEventListener('click', (e) => {
    letsGame('paper');
})

scissorsEl.addEventListener('click', (e) => {
    letsGame('scissors');
})

const scoreEl = document.getElementById('scores');
const totalToWin = 5;
let player = 0;
let computer = 0;
function letsGame(userSelection) {
    const results = PlayRound(userSelection, GetRandomCard());
    roundEl.textContent = `Round ${player + computer}`;

    computerEl.textContent = (results);
    scoreEl.textContent = ('Scores: Computer: ' + computer + ' You: ' + player);

    //results
    if (player >= totalToWin || computer >= totalToWin) {
        if (player === computer) {
            computerEl.textContent = `You are both equals! ${computer} each.`;
        }
        else if (computer > player) {
            computerEl.textContent = `You Lose! Computer takes the Crown this time. ${computer} vs ${player}`;
        }
        else {
            computerEl.textContent = `You Won! You beat the Computer. ${player} vs ${computer}`;
        }
        //reset counters
        player = 0;
        computer = 0;
        roundEl.textContent = 'Play a game of 5, again?'
    }
}

function GetRandomCard() {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function PlayRound(playerSelection, computerSelection) {
    const man = (playerSelection ?? "").toLowerCase();
    const machine = computerSelection.toLowerCase();

    if (machine === man) {
        player++;
        computer++;
        return `You are both equals! Or, ${man}`;
    }

    if ((machine === "rock" && man !== "paper")
        || (machine === "scissors" && man !== "rock")
        || (machine === "paper" && man !== "scissors")) {

        computer++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    if ((man === "rock" && machine !== "paper")
        || (man === "scissors" && machine !== "rock")
        || (man === "paper" && machine !== "scissors")) {

        player++;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
}