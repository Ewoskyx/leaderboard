import 'bootstrap';
import './main.scss';
import renderBoardItem from './app/scoreboard.js';
import { createScore, getScore } from './app/api.js';

const nameVal = document.getElementById('nameInput');
const scoreVal = document.getElementById('scoreInput');
const refresh = document.getElementById('refresh-btn');
const scoreBoard = document.getElementById('scoreBoard');

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const gameJson = {
    user: nameVal.value,
    score: scoreVal.value,
  };
  createScore(gameJson);
  nameVal.value = '';
  scoreVal.value = '';
});

const getScores = () => {
  getScore().then((data) => {
    const list = data.result;
    scoreBoard.innerHTML = '';
    list.forEach((item) => {
      renderBoardItem(item);
    });
  });
};
refresh.addEventListener('click', () => {
  getScores();
  nameVal.value = '';
  scoreVal.value = '';
});
