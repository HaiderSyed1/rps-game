console.log("Hello World");

function getComputerChoice(){
    let num = 0;
    num = Math.random();
    console.log(num);
    if(num >= 0 && num < .33){
        return "rock";
    }
    else if(num >= .33 && num < .67){
        return "paper";
    }
    else{
        return "scissors";
    }

}


function getHumanChoice(){
    let checked = false;
    let sign;
    while(checked === false){
        sign = prompt("Let's play rock, paper, scissors!");
        sign = sign.toLowerCase();

        if(sign === "rock" || sign === "paper" || sign === "scissors")
            checked = true;
    }
    return sign;
}


//0 means computer wins, 1 means human wins, 2 means tie
function playRound(computerParam, humanParam){
    if(humanParam === "rock"){
        if(computerParam === "paper")
            return 0;
        if(computerParam === "scissors")
            return 1;
        if(computerParam === "rock")
            return 2;
    }
    else if (humanParam === "paper"){ 
        if(computerParam === "scissors")
            return 0;
        if(computerParam === "rock")
            return 1;
        if(computerParam === "paper")
            return 2;

    }
    else if (humanParam === "scissors"){
        if(computerParam === "rock")
            return 0;
        if(computerParam === "paper")
            return 1;
        if(computerParam === "scissors")
            return 2;
    }
}

function playGame(){
    let computerSelection = "hello";
    let humanSelection = "hi";

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();

    let computerScore = 0;
    let humanScore = 0;
    let answer = 3;
    for(let i = 0; i < 5; i++){
        console.log(computerSelection);
        console.log(humanSelection);
        answer = playRound(computerSelection, humanSelection);

        if(answer === 0)
            computerScore++;
        if(answer === 1)
            humanScore++;

        console.log("Computer: " + computerScore);
        console.log("Human: " + humanScore);

        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
    }

    if(computerScore < humanScore){
        console.log("Congrats! You Win!");
    }
    else if(computerScore > humanScore){
        console.log("too bad... you lose");
    }
    else{
        console.log("Tie game.")
    }

}

playGame();
