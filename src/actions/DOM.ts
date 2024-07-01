import { getAddition } from '../utils';
import { fieldSize, snakeStartLength, snakeStartPosition } from '../config';
import store from '../utils/store';
import { BlockType, GameFieldType } from '../utils/types';

const debugGameField = () => {
  let str = '';

  const { gameField } = store;

  for (let x = 0; x < gameField.length; x += 1) {
    str += `${gameField[x].join(' ')}\n`;
  }

  const info = [
    `gameField: \n${str}`,
    `current snake's length: ${store.snake.length}`,
    `current snake's speed: ${store.snakeInitialMovingSpeed}`,
  ];

  // eslint-disable-next-line no-console
  console.info(info.join('\n'));
};

// mark a block
export const markBlock = (position: [number, number], type: BlockType) => {
  const { gameField } = store;

  gameField[position[0]][position[1]] = type;

  store.gameField = gameField;
};

export const render = () => {
  if (store.isDebugEnabled) {
    debugGameField();
  }

  const field = document.querySelector('.game');

  const coords = { x: 0, y: -1 };

  for (let x = 0; x < field.children.length; x += 1) {
    coords.y += 1;

    if (coords.y === fieldSize) {
      coords.x += 1;
      coords.y = 0;
    }

    const elem = field.children[x];

    const attributeName = 'data-class';

    switch (store.gameField[coords.x][coords.y]) {
      case BlockType.food:
        elem.setAttribute(attributeName, 'food');
        break;
      case BlockType.snake:
        elem.setAttribute(attributeName, 'snake');
        break;
      case BlockType.snakeHead:
        elem.setAttribute(attributeName, 'snakeHead');
        break;
      default:
        elem.removeAttribute(attributeName);
    }
  }
};

export const clearGameFieldBlock = (block: [number, number]) => {
  markBlock(block, BlockType.empty);
};

export const syncSnakeWithGameField = () => {
  const { snake } = store;

  for (let i = 0; i < snake.length; i += 1) {
    markBlock([snake[i][0], snake[i][1]], i === 0 ? BlockType.snakeHead : BlockType.snake);
  }
};

export const regenerateGameField = () => {
  const temp: GameFieldType = [];

  for (let x = 0; x < fieldSize; x += 1) {
    const tempToFillBlocks = [];

    for (let y = 0; y < fieldSize; y += 1) {
      tempToFillBlocks.push(0);
    }

    temp.push(tempToFillBlocks);
  }

  store.gameField = temp;
};

export const createGameField = () => {
  const root = document.querySelector('#root');

  if (!root) {
    return;
  }

  const div = document.createElement('div');

  div.className = 'game';

  regenerateGameField();

  let children = '';

  for (let x = 0; x < fieldSize; x += 1) {
    for (let y = 0; y < fieldSize; y += 1) {
      children += '<div class="cell"></div>';
    }
  }

  div.innerHTML = children;

  root.appendChild(div);

  document.documentElement.style.setProperty('--fieldNumber', fieldSize.toString());
};

export const generateSnake = () => {
  const approximateCenter = Math.floor((fieldSize - 1) / 2);

  for (let i = -1; i < snakeStartLength - 1; i += 1) {
    store.snake.push([
      approximateCenter + getAddition('x', i, snakeStartPosition),
      approximateCenter + getAddition('y', i, snakeStartPosition),
    ]);
  }

  syncSnakeWithGameField();

  render();
};

export const regenerateSnake = () => {
  store.snake = [];

  generateSnake();
};
