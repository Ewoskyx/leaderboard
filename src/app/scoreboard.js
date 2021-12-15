const board = document.querySelector('.scoreBoard');

const createPlayerElement = (player) => `
<li class="list-group-item">${player.user}: ${player.score}</li>
`;

const renderBoardItem = (player) => {
  board.insertAdjacentHTML('beforeend', createPlayerElement(player));
};

export default renderBoardItem;