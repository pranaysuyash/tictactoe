const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  { name: '', symbol: 'X' },
  { name: '', symbol: 'O' },
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.querySelector('#config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePLayerName = document.getElementById('active-player-name');

const editPlayer1Button = document.getElementById('edit-player-1-btn');
const editPlayer2Button = document.getElementById('edit-player-2-btn');
const cancelModalButton = document.getElementById('cancel-config-btn');
const confirmModalButton = document.getElementById('confirm-config-btn');
const startNewGameBtn = document.getElementById('start-game-btn');

const gameFieldElements = document.querySelectorAll('#game-board li');

editPlayer1Button.addEventListener('click', openPlayerConfig);
editPlayer2Button.addEventListener('click', openPlayerConfig);
cancelModalButton.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener('click', selectGameField);
}
