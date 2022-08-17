const playerHand = document.querySelector(".player");
const cpuHand = document.querySelector(".computer");
const displayWinner = document.querySelector(".display-winner");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const playerScoreBoard = document.querySelector(".playerscore");
const cpuScoreBoard = document.querySelector(".compscore");
let playerScore = 0;
let compScore = 0;


const hands = ["rock","paper","scissor"];

rockBtn.addEventListener("click",()=>{
    playerHand.src = "Assets/rock.jpg";
    game("rock");
});
paperBtn.addEventListener("click",()=>{
    playerHand.src = "Assets/paper.jpg";
    game("paper");
});
scissorsBtn.addEventListener("click",()=>{
    playerHand.src = "Assets/scissor.jpg";
    game("scissor");
});

function game(playerChoice){
    let cpu = hands[Math.floor(Math.random() * hands.length)];

    if(playerChoice == cpu){
        cpuHand.src = `Assets/${cpu}.jpg`;
        displayWinner.textContent = "Its A Draw!"
    }
    
    if(playerChoice == "rock"){
        switch(cpu){
            case "paper":
                cpuHand.src = "Assets/paper.jpg";
                displayWinner.textContent = "You Lost!";
                compScore += 1;
                break;
            case "scissor":
                cpuHand.src = "Assets/scissor.jpg";
                displayWinner.textContent = "You Won!";
                playerScore += 1;
                break;
        }
    }

    if(playerChoice == "paper"){
        switch(cpu){
            case "scissor":
                cpuHand.src = "Assets/scissor.jpg";
                displayWinner.textContent = "You Lost!";
                compScore += 1;
                break;
            case "rock":
                cpuHand.src = "Assets/rock.jpg";
                displayWinner.textContent = "You Won!";
                playerScore += 1;
                break;
        }
    }

    if(playerChoice == "scissor"){
        switch(cpu){
            case "rock":
                cpuHand.src = "Assets/rock.jpg";
                displayWinner.textContent = "You Lost!";
                compScore += 1;
                break;
            case "paper":
                cpuHand.src = "Assets/paper.jpg";
                displayWinner.textContent = "You Won!";
                playerScore += 1;
                break;
        }
    }

    playerScoreBoard.textContent = `You (${playerScore})`;
    cpuScoreBoard.textContent = `You (${compScore})`;

}