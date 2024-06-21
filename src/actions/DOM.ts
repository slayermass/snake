import { getAddition } from '../utils';
import { fieldSize, snakeStartLength, snakeStartPosition } from '../config';
import { getGameField, setGameField, getSnake, setSnake, getIsDebugEnabled } from '../utils/store';
import { BlockType, GameFieldType } from '../utils/types';

const debugGameField = () => {
  let str = '';

  const gameField = getGameField();

  for (let x = 0; x < gameField.length; x += 1) {
    str += `${gameField[x].join(' ')}\n`;
  }

  // eslint-disable-next-line no-console
  console.info(`gameField: \n${str}`);
  // eslint-disable-next-line no-console
  console.info(`current snake's length: ${getSnake().length}`);
};

// mark a block
export const markBlock = (position: [number, number], type: BlockType) => {
  const gameField: GameFieldType = getGameField() as GameFieldType;

  gameField[position[0]][position[1]] = type;

  setGameField(gameField);
};

export const render = () => {
  if (getIsDebugEnabled()) {
    debugGameField();
  }

  const field = document.querySelector('.game');

  const coords = { x: 0, y: -1 };

  const allCssClasses = ['food', 'snake', 'snakeHead'] as const;

  for (let x = 0; x < field.children.length; x += 1) {
    coords.y += 1;

    if (coords.y === fieldSize) {
      coords.x += 1;
      coords.y = 0;
    }

    const elem = field.children[x].classList;

    elem.remove(...allCssClasses);

    // eslint-disable-next-line default-case
    switch (getGameField()[coords.x][coords.y]) {
      case BlockType.food:
        elem.add('food');
        break;
      case BlockType.snake:
        elem.add('snake');
        break;
      case BlockType.snakeHead:
        elem.add('snakeHead');
        break;
    }
  }
};

export const clearGameFieldBlock = (block: [number, number]) => {
  markBlock(block, BlockType.empty);
};

export const syncSnakeWithGameField = () => {
  for (let i = 0; i < getSnake().length; i += 1) {
    markBlock([getSnake()[i][0], getSnake()[i][1]], i === 0 ? BlockType.snakeHead : BlockType.snake);
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

  setGameField(temp);
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
    getSnake().push([
      approximateCenter + getAddition('x', i, snakeStartPosition),
      approximateCenter + getAddition('y', i, snakeStartPosition),
    ]);
  }

  syncSnakeWithGameField();

  render();
};

export const regenerateSnake = () => {
  setSnake([]);

  generateSnake();
};
