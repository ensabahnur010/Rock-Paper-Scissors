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
//case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations

function getHumanChoice() {
    let humanChoice = prompt ("Rock,Paper or Scissors?");
    return capitalize(humanChoice);
}
//function to get human choice
//alert(getHumanChoice());



let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();




function playRound(humanChoice,computerChoice) {
  if (humanChoice === computerChoice) {
    return "Draw";
  } else {
    if (humanChoice == "Rock" && computerChoice == "Paper") {
      return "Computer wins";
    } else {
      if (humanChoice == "Paper" && computerChoice == "Scissors") {
        return "Computer wins";
      } else {
        if (humanChoice == "Scissors" && computerChoice == "Rock") {
          return "Computer wins";
        } else {
          if (humanChoice == "Paper" && computerChoice == "Rock") {
            return "Human wins";
          } else {
            if (humanChoice == "Scissors" && computerChoice == "Paper") {
              return "Human wins";
            } else {
              if (humanChoice == "Rock" && computerChoice == "Scissors") {
                return "Human wins";
              } else {
                return "WTF is this!!!";
              }
            }
          }
        }
      }
    }
  }
}
//play a single round


function playGame (rounds) {
  let humanScore = 0;
  let computerScore = 0;
  let roundResult = playRound(humanChoice,computerChoice);
  round++;

  if (rounds >= 0) {
    if (roundResult === "Computer wins") {
      computerScore++;
      rounds--;
    } else {
      if (roundResult === "Human wins") {
        humanScore++;
        rounds--;
      } else {
      }
    }
  } else {
    GAME OVER!
  }

}

alert(playGame(5));

