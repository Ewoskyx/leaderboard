import 'bootstrap';
import './main.scss';
import renderBoardItem from './app/scoreboard.js';
import { createScore, getScore } from './app/api.js';

const nameVal = document.getElementById('nameInput');
const scoreVal = document.getElementById('scoreInput');
const refresh = document.getElementById('refresh-btn');
const scoreBoard = document.getElementById('scoreBoard');
const sort = document.getElementById('sort-selector');

// Add Score
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

// Sort Functions
const getScoresDescending = () => {
  getScore().then((data) => {
    const list = data.result;
    const sortedList = list.sort((s1, s2) => (s2.score - s1.score));
    scoreBoard.innerHTML = '';
    sortedList.forEach((item) => {
      renderBoardItem(item);
    });
  });
};

const getScoresAscending = () => {
  getScore().then((data) => {
    const list = data.result;
    const sortedList = list.sort((s1, s2) => (s1.score - s2.score));
    scoreBoard.innerHTML = '';
    sortedList.forEach((item) => {
      renderBoardItem(item);
    });
  });
};

const getNamesAscending = () => {
  getScore().then((data) => {
    const list = data.result;
    const sortedList = list.sort((s1, s2) => {
      const userA = s1.user.toUpperCase();
      const userB = s2.user.toUpperCase();
      if (userA < userB) {
        return -1;
      }
      if (userA > userB) {
        return 1;
      }
      return 0;
    });
    scoreBoard.innerHTML = '';
    sortedList.forEach((item) => {
      renderBoardItem(item);
    });
  });
};

const getNamesDescending = () => {
  getScore().then((data) => {
    const list = data.result;
    const sortedList = list.sort((s1, s2) => {
      const userA = s1.user.toUpperCase();
      const userB = s2.user.toUpperCase();
      if (userA < userB) {
        return 1;
      }
      if (userA > userB) {
        return -1;
      }
      return 0;
    });
    scoreBoard.innerHTML = '';
    sortedList.forEach((item) => {
      renderBoardItem(item);
    });
  });
};

// Refresh event
refresh.addEventListener('click', () => {
  getScoresDescending();
  nameVal.value = '';
  scoreVal.value = '';
});

// Sort events
sort.addEventListener('change', (e) => {
  if (e.target.value === '1') {
    getScoresAscending();
  } else if (e.target.value === '2') {
    getScoresDescending();
  } else if (e.target.value === '3') {
    getNamesAscending();
  } else if (e.target.value === '4') {
    getNamesDescending();
  }
});
