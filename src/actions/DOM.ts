import { getAddition } from '../utils';
import { fieldSize, snakeStartLength, snakeStartPosition } from '../config';
import { gameField, snake } from '../utils/store';
import { BlockType } from '../utils/types';

export const endOfGame = () => {
  console.log('end of the game');
};

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
    switch (gameField[coords.x][coords.y]) {
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
  for (let i = 0; i < snake.length; i += 1) {
    gameField[snake[i][0]][snake[i][1]] = i === 0 ? BlockType.snakeHead : BlockType.snake;
  }

  if (fieldsToClear) {
    gameField[fieldsToClear[0]][fieldsToClear[1]] = BlockType.empty;
  }
};

export const generateGameField = () => {
  const root = document.querySelector('#root');

  if (!root) {
    return;
  }

  const div = document.createElement('div');

  div.className = 'game';

  let children = '';

  for (let x = 0; x < fieldSize; x += 1) {
    const tempToFillBlocks = [];

    for (let y = 0; y < fieldSize; y += 1) {
      children += '<div class="cell"></div>';
      tempToFillBlocks.push(0);
    }

    gameField.push(tempToFillBlocks);
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
    snake.push([
      approximateCenter + getAddition('x', i, snakeStartPosition),
      approximateCenter + getAddition('y', i, snakeStartPosition),
    ]);
  }

  syncSnakeWithGameField();

  render();
};
