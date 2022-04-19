const gameOptions = ["Rock", "Paper", "Scissors"];
const messageEl = document.getElementById("message");
const formEl = document.getElementById("form-el");
const progressEl = document.getElementById("progress-el");

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    messageEl.textContent = game();
})

let player = 0;
let computer = 0;
function game() {
    //reset counters
    player = 0;
    computer = 0;
    progressEl.textContent = "";

    for (let index = 0; index < 3; index++) {
        progressEl.textContent += `Round ${index + 1}:` 
        + PlayRound(getPlayerInput(), GetRandomCard()) + '\n';
    }

    //results
    if (player === computer) {
        return `You are both equals! ${computer} each.`;
    }
    if (computer > player) {
        return `You Lose! Computer takes the Crown this time. ${computer} vs ${player}`;
    }
    return `You Won! You beat the Computer. ${player} vs ${computer}`;
}

function getPlayerInput() {
    return prompt(`${gameOptions.join(', ')}? Edit change to the default.`, GetRandomCard());
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