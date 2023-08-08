function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1)
    let output = " "
    if (choice == 1){
        output = "rock"
    } else if (choice == 2){
        output = "scissors"
    } else if (choice == 3){
        output = "paper"
    }
    return output
}

function getPlayerChoice(){
    let playerChoice = prompt("type S for scissors, R for rock and P for paper")
    let output = ""
    if(playerChoice == "S" || playerChoice == "s"){
        output = "scissors"
    } else if (playerChoice == "R" || playerChoice == "r"){
        output = "rock"
    } else if (playerChoice == "P" || playerChoice == "p"){
        output = "paper"
    }
    return output
}

console.log(getPlayerChoice())
console.log(getComputerChoice())