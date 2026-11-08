console.log("Hello World");

function getComputerChoice() {
  const determiner = Math.floor(Math.random() * 3);

  if (determiner === 0) {
    return "Rock";
  } else if (determiner === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
//function to get computer choice
//alert (getComputerChoice ());

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getHumanChoice() {
    let humanChoice = prompt ("Rock,Paper or Scissors?");
    return capitalize(humanChoice);
}
//function to get human choice
//alert(getHumanChoice());


let humanScore = 0;
let computerScore = 0;