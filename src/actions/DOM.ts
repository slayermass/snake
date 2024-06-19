import { getAddition } from '../utils';
import { fieldSize, snakeStartLength, snakeStartPosition } from '../config';
import { getGameField, setGameField, getSnake, setSnake } from '../utils/store';
import { BlockType, GameFieldType } from '../utils/types';

export const render = () => {
  const field = document.querySelector('.game');

  const coords = { x: 0, y: -1 };

  const allClasses = ['food', 'snake', 'snakeHead'] as const;

  for (let x = 0; x < field.children.length; x += 1) {
    coords.y += 1;

    if (coords.y === fieldSize) {
      coords.x += 1;
      coords.y = 0;
    }

    const elem = field.children[x].classList;

    elem.remove(...allClasses);

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

export const syncSnakeWithGameField = (fieldsToClear?: [number, number]) => {
  const gameField = getGameField();

  for (let i = 0; i < getSnake().length; i += 1) {
    gameField[getSnake()[i][0]][getSnake()[i][1]] = i === 0 ? BlockType.snakeHead : BlockType.snake;
  }

  if (fieldsToClear) {
    gameField[fieldsToClear[0]][fieldsToClear[1]] = BlockType.empty;
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

  /** add arrow for smartphones todo? */
  // const arrowsDiv = document.createElement('div');
  //
  // arrowsDiv.className = 'arrows';
  // arrowsDiv.innerHTML =
  //   '<div></div><div class="top">Top</div><div></div><div class="left">Left</div><div class="bottom">Bottom</div><div class="right">Right</div>';
  //
  // root.appendChild(arrowsDiv);
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
