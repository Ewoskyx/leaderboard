import 'bootstrap';
import './main.scss';
import renderBoardItem from './app/scoreboard.js';
import Player from './app/player.js';

const nameVal = document.getElementById('nameInput');
const scoreVal = document.getElementById('scoreInput');

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const player = new Player(nameVal.value, scoreVal.value, 1);
  renderBoardItem(player);
});