
const gameSummary = {
 numbers: 0,
 wins: 0,
 losses: 0,
 draws: 0,
}

const game = {
 playerHand: "",
 aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];


function handSelection() {

 game.playerHand = this.dataset.option
 console.log(game.playerHand);
 hands.forEach(hand => hand.style.boxShadow = '');
 this.style.boxShadow = '0 0 0 4px #a488b3';
}



function aiChoice() {
 return hands[Math.floor(Math.random() * 3)].dataset.option;
}


function checkResult(player, ai) {

 if (player === ai) {
  return 'draw';
 } else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
  return 'win';
 } else { return 'loss'; }
}



function publishResult(player, ai, result) {
 document.querySelector('[data-summary="your-choice"]').textContent = player;

 document.querySelector('[data-summary="ai-choice"]').textContent = ai;

 document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

 if (result === "win") {
  document.querySelector('p.wins span').textContent = ++gameSummary.wins;
  document.querySelector('p.wins span').style.color = "#9573a5";
  document.querySelector('[data-summary="who-win"]').textContent = "You Won !!"
  document.querySelector('[data-summary="who-win"]').style.color = "#9573a5";
 } else if (result === "loss") {
  document.querySelector('p.losses span').textContent = ++gameSummary.losses;
  document.querySelector('p.losses span').style.color = "#9573a5";
  document.querySelector('[data-summary="who-win"]').textContent = "AI win !!"
  document.querySelector('[data-summary="who-win"]').style.color = "#a183af";
 } else {
  document.querySelector('p.draws span').textContent = ++gameSummary.draws;
  document.querySelector('p.draws span').style.color = "#9573a5";
  document.querySelector('[data-summary="who-win"]').textContent = "Draw"
  document.querySelector('[data-summary="who-win"]').style.color = "#ad92b9";
 }
}

function startGame() {
 if (!game.playerHand) {
  return alert("Pick a hand");
 }
 game.aiHand = aiChoice();
 const gameResult = checkResult(game.playerHand, game.aiHand);
 console.log(gameResult);
 publishResult(game.playerHand, game.aiHand, gameResult)
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)

