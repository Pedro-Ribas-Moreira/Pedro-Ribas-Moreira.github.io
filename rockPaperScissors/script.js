const playerObj = document.querySelectorAll(".playerResult > img");
const computerObj = document.querySelectorAll(".computerResult > img");
const resultTxt = document.querySelector(".resultText");
const resultDesc = document.querySelector(".resultDescription");
const playerScoreTxt = document.querySelector(".playerScore");
const computerScoreTxt = document.querySelector(".computerScore");
const playerBtns = document.querySelectorAll(".playerSelection");
const resetBtn = document.querySelector(".resetGame");

let playerScore = 0;
let computerScore = 0;

const computerMove = () => {
  const moves = ["Rock", "Paper", "Scissors"];
  const n = Math.floor(Math.random() * moves.length);
  return moves[n];
};

const resetMove = () => {
  for (let i = 0; i < playerObj.length; i++) {
    playerObj[i].style.display = "none";
  }

  for (let i = 0; i < computerObj.length; i++) {
    computerObj[i].style.display = "none";
  }

  document.querySelector(".playerPlaceHolder").style.display = "block";
  document.querySelector(".computerPlaceHolder").style.display = "block";

  document.querySelector(".playerResult h3").style.display = "none";
  document.querySelector(".computerResult h3").style.display = "none";
  document.querySelector(".gameOverText").style.display = "none";
  resultDesc.style.display = "none";
};

const revealMove = (move, who) => {
  document.querySelector(".playerPlaceHolder").style.display = "none";
  document.querySelector(".computerPlaceHolder").style.display = "none";

  let obj;
  if (who === "player") {
    obj = playerObj;
  } else if (who === "computer") {
    obj = computerObj;
  }

  for (let i = 0; i < obj.length; i++) {
    const e = obj[i];

    e.style.display = "none";

    if (move === "Rock" && e.classList.contains("rockSVG")) {
      e.style.display = "block";
    } else if (move === "Paper" && e.classList.contains("paperSVG")) {
      e.style.display = "block";
    } else if (move === "Scissors" && e.classList.contains("scissorsSVG")) {
      e.style.display = "block";
    }
  }
};

const engine = (playerMove, computerMove) => {
  resultDesc.style.display = "block";

  if (playerMove === computerMove) {
    resultTxt.innerHTML = "Tie game!";
    resultDesc.innerHTML = "Both played " + playerMove;
  } else if (
    (computerMove === "Rock" && playerMove === "Scissors") ||
    (computerMove === "Scissors" && playerMove === "Paper") ||
    (computerMove === "Paper" && playerMove === "Rock")
  ) {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    resultTxt.innerHTML = "Computer wins!";
    resultDesc.innerHTML = `${computerMove} beats ${playerMove}`;
  } else {
    playerScore++;
    playerScoreTxt.innerText = playerScore;
    resultTxt.innerHTML = "Player wins!";
    resultDesc.innerHTML = `${playerMove} beats ${computerMove}`;
  }

  revealMove(playerMove, "player");
  revealMove(computerMove, "computer");

  if (playerScore === 5 || computerScore === 5) {
    document.querySelector(".gameOverText").style.display = "block";

    for (let i = 0; i < playerBtns.length; i++) {
      playerBtns[i].style.display = "none";
    }
    resetBtn.style.display = "inline-flex";
  }
};

document.addEventListener("click", (e) => {
  const targetText = e.target.innerText;

  if (
    targetText === "Rock" ||
    targetText === "Paper" ||
    targetText === "Scissors"
  ) {
    resetMove();
    const playerInput = targetText;
    engine(playerInput, computerMove());
    document.querySelector(".playerResult h3").style.display = "block";
    document.querySelector(".computerResult h3").style.display = "block";
  }

  if (targetText === "Play Again!") {
    playerScore = 0;
    computerScore = 0;
    playerScoreTxt.innerHTML = "0";
    computerScoreTxt.innerHTML = "0";

    for (let i = 0; i < playerBtns.length; i++) {
      playerBtns[i].style.display = "inline-flex";
    }

    resetBtn.style.display = "none";
    resultTxt.innerText = "New Game!";
    resultDesc.innerText = "";
    resetMove();
  }
});
