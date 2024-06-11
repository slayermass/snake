import './styles/index.scss';

import { getRandomNumber } from './utils';
import { gameSize } from './config';

const filledBlocks: number[][] = []; // 0 - empty, 1 - active, 2 - snake

const generateField = () => {
  const div = document.createElement('div');
  div.className = 'game';

  let children = '';

  for (let x = 0; x < gameSize; x += 1) {
    const tempToFillBlocks = [];

    for (let y = 0; y < gameSize; y += 1) {
      children += '<div class="cell"></div>';
      tempToFillBlocks.push(0);
    }

    filledBlocks.push(tempToFillBlocks);
  }
  div.innerHTML = children;

  document.querySelector('#root')?.appendChild(div);
};

const render = () => {
  const field = document.querySelector('.game');

  const coords = { x: 0, y: -1 };

  for (let x = 0; x < field.children.length; x += 1) {
    coords.y += 1;

    if (coords.y === 10) {
      coords.x += 1;
      coords.y = 0;
    }

    if (filledBlocks[coords.x][coords.y] === 1) {
      field.children[x].classList.add('active');
    } else {
      field.children[x].classList.remove('active');
    }
  }
};

let lastPosActive = [0, 0];

const createNewBlockInRandomPlace = () => {
  const x = getRandomNumber(1, gameSize) - 1;
  const y = getRandomNumber(1, gameSize) - 1;

  filledBlocks[x][y] = 1;

  filledBlocks[lastPosActive[0]][lastPosActive[1]] = 0;
  lastPosActive = [x, y];

  render();
};

window.addEventListener('load', () => {
  generateField();

  setInterval(() => {
    createNewBlockInRandomPlace();
  }, 1000);
});
