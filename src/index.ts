import './styles/index.scss';

import { getRandomNumber } from './utils';
import { fieldSize, snakeStartLength, snakeStartPosition } from './config';

const enum BlockType {
  'empty',
  'active',
  'snake',
}

const filledBlocks: number[][] = []; // 0 - empty, 1 - active, 2 - snake
let interval: number;

const generateGameField = () => {
  const div = document.createElement('div');
  div.className = 'game';

  let children = '';

  for (let x = 0; x < fieldSize; x += 1) {
    const tempToFillBlocks = [];

    for (let y = 0; y < fieldSize; y += 1) {
      children += '<div class="cell"></div>';
      tempToFillBlocks.push(0);
    }

    filledBlocks.push(tempToFillBlocks);
  }
  div.innerHTML = children;

  document.querySelector('#root')?.appendChild(div);

  document.documentElement.style.setProperty('--fieldNumber', fieldSize.toString());
};

const render = () => {
  const field = document.querySelector('.game');

  const coords = { x: 0, y: -1 };

  for (let x = 0; x < field.children.length; x += 1) {
    coords.y += 1;

    if (coords.y === fieldSize) {
      coords.x += 1;
      coords.y = 0;
    }

    const elem = field.children[x].classList;

    switch (filledBlocks[coords.x][coords.y]) {
      case BlockType.active:
        elem.add('active');
        break;
      case BlockType.snake:
        elem.add('snake');
        break;
      default:
        elem.remove('active', 'snake');
    }
  }
};

// mark a block and rerender
const markBlock = (position: [number, number], type: BlockType) => {
  filledBlocks[position[0]][position[1]] = type;

  render();
};

const generateSnake = () => {
  const approximateCenter = Math.floor((fieldSize - 1) / 2);

  for (let i = -1; i < snakeStartLength - 1; i += 1) {
    markBlock(
      [
        approximateCenter + (snakeStartPosition === 'horizontal' ? i : 0),
        approximateCenter + (snakeStartPosition === 'vertical' ? i : 0),
      ],
      BlockType.snake,
    );
  }
};

const createNewBlockInRandomPlace = () => {
  // find free blocks
  const freeBlocks = [];

  for (let x = 0; x < fieldSize; x += 1) {
    for (let y = 0; y < fieldSize; y += 1) {
      if (filledBlocks[x][y] === BlockType.empty) {
        freeBlocks.push([x, y]);
      }
    }
  }

  if (freeBlocks.length === 0) {
    clearInterval(interval);
    console.log('end of the game');
  } else {
    markBlock(freeBlocks[getRandomNumber(1, freeBlocks.length) - 1], BlockType.active);
  }
};

window.addEventListener('load', () => {
  generateGameField();

  generateSnake();

  interval = window.setInterval(() => {
    createNewBlockInRandomPlace();
  }, 1000);
});
