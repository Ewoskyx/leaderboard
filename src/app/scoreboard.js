const board = document.querySelector('.scoreBoard');

const createPlayerElement = (player) => `
<li class="list-group-item" id="${player.id}">${player.name}: ${player.score}</li>
`;

const renderBoardItem = (player) => {
  board.insertAdjacentHTML('beforeend', createPlayerElement(player));
};

export default renderBoardItem;