let userScore = 0;
let computerScore = 0;

const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play Again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin === true) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You Lost! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //generate computer choice
  const computerChoice = genComputerChoice();

  //Draw condition
  if (computerChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //computer = scissors , paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //computer = rock , scissors
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      //user = scissors
      //computer = rock , paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
