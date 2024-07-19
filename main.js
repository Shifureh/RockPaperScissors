const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const rockButton = document.getElementById("rock");
const computerImage = document.querySelector(".computerImage");
const playerImage = document.querySelector(".playerImage");
const endText = document.querySelector(".roundResult");
const playerPoints = document.querySelector(".playerPoints");
const computerPoints = document.querySelector(".computerPoints");

paperButton.addEventListener("click", () => {
  rockPaperScissors(1);
});

scissorsButton.addEventListener("click", () => {
  rockPaperScissors(3);
});

rockButton.addEventListener("click", () => {
  rockPaperScissors(2);
});

function rockPaperScissors(playerChoice) {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice == paper) {
    computerImage.src = "images/paper.png";
  } else if (computerChoice == scissors) {
    computerImage.src = "images/scissors.png";
  } else if (computerChoice == rock) {
    computerImage.src = "images/rock.png";
  }
  if (playerChoice == paper) {
    playerImage.src = "images/paper.png";
  } else if (playerChoice == scissors) {
    playerImage.src = "images/scissors.png";
  } else if (playerChoice == rock) {
    playerImage.src = "images/rock.png";
  }
  if (playerChoice == computerChoice) {
    endText.textContent = "TIE";
  }
  if (playerChoice == paper && computerChoice == rock) {
    playerScore++;
    playerPoints.textContent = playerScore;
    endText.textContent = "YOU WIN";
  }
  if (playerChoice == rock && computerChoice == scissors) {
    playerScore++;
    playerPoints.textContent = playerScore;
    endText.textContent = "YOU WIN";
  }
  if (playerChoice == scissors && computerChoice == paper) {
    playerScore++;
    playerPoints.textContent = playerScore;
    endText.textContent = "YOU WIN";
  }
  if (computerChoice == paper && playerChoice == rock) {
    computerScore++;
    computerPoints.textContent = computerScore;
    endText.textContent = "YOU LOSE";
  }
  if (computerChoice == rock && playerChoice == scissors) {
    computerScore++;
    computerPoints.textContent = computerScore;
    endText.textContent = "YOU LOSE";
  }
  if (computerChoice == scissors && playerChoice == paper) {
    computerScore++;
    computerPoints.textContent = computerScore;
    endText.textContent = "YOU LOSE";
  }
  if (computerScore == 9) {
    computerScore = 0;
    playerScore = 0;
    computerPoints.textContent = computerScore;
    playerPoints.textContent = playerScore;
    endText.textContent = "COMPUTER WINS";
  }
  if (playerScore == 9) {
    computerScore = 0;
    playerScore = 0;
    computerPoints.textContent = computerScore;
    playerPoints.textContent = playerScore;
    endText.textContent = "PLAYER WINS";
  }
}

const paper = 1;
const rock = 2;
const scissors = 3;

let playerScore = 0;
let computerScore = 0;
