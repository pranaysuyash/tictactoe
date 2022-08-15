function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('username').trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorOutputElement.textContent = 'Please enter a valid name!';
    return;
  }

  //method 1
  /*if (editedPlayer === 1) {
    editPlayer1Button.parentElement.children[1].textContent = enteredPlayerName;
  } else if (editedPlayer === 2) {
    editPlayer2Button.parentElement.children[1].textContent = enteredPlayerName;
  }*/

  //method 2
  const updatedPlayerData = document.getElementById(
    'player-' + editedPlayer + '-data'
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
