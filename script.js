console.log("Hello World");

function getComputerChoice() {
    let num = Math.random();
    if (num < 0.33) return "rock";
    if (num < 0.67) return "paper";
    return "scissors";
}


function getHumanChoice() {
    return new Promise(resolve => {
        function handleClick(event) {
            resolve(event.target.textContent.toLowerCase()); // Return choice
            document.querySelectorAll('.option').forEach(button => {
                button.removeEventListener('click', handleClick); // Remove listener to avoid duplicates
            });
        }

        document.querySelectorAll('.option').forEach(button => {
            button.addEventListener('click', handleClick, { once: true }); // Ensures each button click is handled only once
        });
    });
}


//0 means computer wins, 1 means human wins, 2 means tie
function playRound(computerParam, humanParam) {
    if (humanParam === computerParam) return 2; // Tie
    if (
        (humanParam === "rock" && computerParam === "scissors") ||
        (humanParam === "paper" && computerParam === "rock") ||
        (humanParam === "scissors" && computerParam === "paper")
    ) {
        return 1; // Human wins
    }
    return 0; // Computer wins
}

async function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let round = 0

    let resultDiv = document.getElementById("result");

    while (humanScore < 5 && computerScore < 5) {
        console.log(`Round ${round + 1}`);
        round++;
        resultDiv.innerHTML += `<p>Round ${round} - Choose your move!</p>`;

        let computerSelection = getComputerChoice();
        let humanSelection = await getHumanChoice(); // Wait for user input

        console.log(`Computer: ${computerSelection}`);
        console.log(`Human: ${humanSelection}`);

        let result = playRound(computerSelection, humanSelection);
        if (result === 0) {
            computerScore++;
            resultDiv.innerHTML += `<p>Round ${round}: Computer chose ${computerSelection}. You chose ${humanSelection}. <b>Computer wins this round!</b></p>`;
        } else if (result === 1) {
            humanScore++;
            resultDiv.innerHTML += `<p>Round ${round}: Computer chose ${computerSelection}. You chose ${humanSelection}. <b>You win this round!</b></p>`;
        } else {
            resultDiv.innerHTML += `<p>Round ${round}: Computer chose ${computerSelection}. You chose ${humanSelection}. <b>It's a tie!</b></p>`;
        }

        resultDiv.innerHTML += `<p>Score -> Computer: ${computerScore}, Human: ${humanScore}</p>`;
    }

    console.log(`Final Score - Computer: ${computerScore}, Human: ${humanScore}`);

    if (computerScore > humanScore) {
        resultDiv.innerHTML += `<h2>Too bad... you lose!</h2>`;
    } else if (computerScore < humanScore) {
        resultDiv.innerHTML += `<h2>Congrats! You Win!</h2>`;
    } else {
        resultDiv.innerHTML += `<h2>It's a tie game!</h2>`;
    }
}


playGame();
