const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const message = document.getElementById("anouncer");
const history = document.getElementById("history");
const counter = document.getElementById("round");
const playerWin = document.getElementById("winCount");
const computerWin = document.getElementById("loseCount");
const restart = document.getElementById("reset")
restart.disabled = true
let roundCount = 1;
let winCount = 0;
let loseCount = 0;

function restartGame() {
    winCount = 0
    loseCount = 0
    roundCount = 1
    playerWin.textContent = `${winCount}`
    computerWin.textContent = `${loseCount}`
    message.textContent = "Pick rock, paper, or scissors to play again"
    counter.textContent = `Round: ${roundCount}`
    let newEntry = document.createElement("p")
    newEntry.textContent = "------New Round------"
    history.appendChild(newEntry)
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
    restart.disabled = true
};

const computerTurn = () => {
    let selection = Math.floor(Math.random() * 3) + 1;
    if(selection == 1){
        return "rock"
    };
    if(selection == 2){
        return "paper"
    };
    if(selection == 3){
        return "scissors"
    };
};

const setMessages = (result) => {
    let newEntry = document.createElement("p")
    roundCount += 1
    console.log(roundCount)
    if(result == "win"){
        message.textContent = "You won"
        newEntry.textContent = `The player won round ${roundCount}`
        winCount += 1
        console.log(winCount)
        playerWin.innerText = winCount
    } else if(result == "lose") {
        message.textContent = "you lost"
        newEntry.textContent = `The computer won round ${roundCount}`
        loseCount += 1
        console.log(loseCount)
        computerWin.innerText = loseCount
    } else{
        message.textContent = "The round was a draw"
        newEntry.textContent = `The computer and the player drew`
    }
    history.appendChild(newEntry)
    counter.textContent = `Round: ${roundCount}`
};

const compareScores = (computer, player) => {
    if ((player == "rock" && computer == "scissors") || (player == "scissors" && computer == "paper") || (player == "paper" && computer == "rock")){
        setMessages("win")
    } else if(player == computer) {
        setMessages("draw")
    }else {
        setMessages("lose")
    };
};



const checkWin = () => {
    if(winCount == 5 || loseCount == 5){
        console.log("this works")
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        restart.disabled = false
        if(winCount == 5){
            message.textContent = "you won, press restart to play again"
        } else if(loseCount == 5){
            message.textContent = "you lose, press restart to play again"
        }
    }
};

restart.addEventListener("click", () => {
    restartGame();
})

rock.addEventListener("click", () => {
    const playerSelection = "rock";
    const compSelection = computerTurn();
    const winState = compareScores(compSelection, playerSelection);
    checkWin()
});

paper.addEventListener("click", () => {
    const playerSelection = "paper";
    const compSelection = computerTurn();
    const winState = compareScores(compSelection, playerSelection);
    checkWin()
})

scissors.addEventListener("click", () => {
    const playerSelection = "scissors";
    const compSelection = computerTurn();
    const winState = compareScores(compSelection, playerSelection);
    checkWin()
})

