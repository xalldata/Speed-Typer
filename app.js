const timeLeft = document.querySelector(".time-left");
const randomWord = document.querySelector(".random-word");
const inputPlayer = document.querySelector(".input-player");
const scorePlayerEl = document.querySelectorAll(".score");

const typerContainer = document.querySelector(".typer-container");
const typerContainer2 = document.querySelector(".typer-container2");

const reloadBtn = document.querySelector(".reload-btn");

var randomWords = [
  "table",
  "salut",
  "bonjour",
  "nuit",
  "portable",
  "bureau",
  "montre",
  "horloge",
  "école",
];
var count = 10;
var score = 0;

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
  count--;
  timeLeft.innerHTML = count;

  if (count == 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

reloadBtn.addEventListener("click", () => {
  location.reload();
});

function resetGame() {
  typerContainer.classList.remove("hide");
  typerContainer2.classList.add("hide");
}
function gameOver() {
  typerContainer.classList.add("hide");
  typerContainer2.classList.remove("hide");
  score = 0;
}

function generateRandomWord() {
  return Math.floor(Math.random() * randomWords.length);
}

function updateWord() {
  var generateWord = generateRandomWord();
  randomWord.textContent = randomWords[generateWord];
  scorePlayerEl.textContent = count;
}

updateWord();

inputPlayer.addEventListener("input", function (e) {
  if (randomWord.textContent === e.target.value) {
    score++;
    count = count + 5;
    scorePlayerEl.forEach(function (scorePlayerEl) {
      scorePlayerEl.textContent = score;
    });
    updateWord();
    e.target.value = "";
  }
});
