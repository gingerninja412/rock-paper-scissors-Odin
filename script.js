function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1);
    let output = " ";
    if (choice == 1){
        output = "rock"
    } else if (choice == 2){
        output = "scissors"
    } else if (choice == 3){
        output = "paper"
    };
    return output;
};

function getPlayerChoice(){
    let playerChoice = prompt("type S for scissors, R for rock and P for paper");
    let output = "";
    if(playerChoice == "S" || playerChoice == "s"){
        output = "scissors"
    } else if (playerChoice == "R" || playerChoice == "r"){
        output = "rock"
    } else if (playerChoice == "P" || playerChoice == "p"){
        output = "paper"
    };
    return output;
};

function round(computer, player){
    let win = false
    if ((computer == "paper" && player == "rock") || (computer == "rock" && player == "scissors") || (computer == "scissors" && player == "paper")){
        win = false
        console.log("you lost, the computer picked " + computer )
    } else {
        win = true
        console.log("you lost, the computer picked " + computer)
    };
    return win;
}

function game(){
    let score = 0;
    for(let i = 1; i <= 5; i++){
        let bout = round(getComputerChoice(), getPlayerChoice())
        if( bout == true){
            score += 1
        }
    };
    if (score >= 3){
        return "you won"
    }
    return "you lost"
};

console.log(game());