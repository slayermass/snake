import './styles/index.scss';

import { getRandomNumber } from './utils';
import { fieldSize, snakeStartLength, snakeStartPosition } from './config';

const enum BlockType {
  'empty',
  'active',
  'snake',
  'snakeHead',
}

const filledBlocks: number[][] = []; // 0 - empty, 1 - active, 2 - snake

const snake: [number, number][] = [];

let snakeMovingDirection: typeof snakeStartPosition = snakeStartPosition;

let interval: number;

const generateGameField = () => {
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

    filledBlocks.push(tempToFillBlocks);
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

const render = () => {
  const field = document.querySelector('.game');

  const coords = { x: 0, y: -1 };

  const allClasses = ['active', 'snake', 'snakeHead'];

  for (let x = 0; x < field.children.length; x += 1) {
    coords.y += 1;

    if (coords.y === fieldSize) {
      coords.x += 1;
      coords.y = 0;
    }

    const elem = field.children[x].classList;

    elem.remove(...allClasses);

    // eslint-disable-next-line default-case
    switch (filledBlocks[coords.x][coords.y]) {
      case BlockType.active:
        elem.add('active');
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

// mark a block and rerender
const markBlock = (position: [number, number], type: BlockType) => {
  filledBlocks[position[0]][position[1]] = type;

  render();
};

const endOfGame = () => {
  clearInterval(interval);

  console.log('end of the game');
};

const syncSnakeWithGameField = (fieldsToClear?: [number, number]) => {
  for (let i = 0; i < snake.length; i += 1) {
    filledBlocks[snake[i][0]][snake[i][1]] = i === 0 ? BlockType.snakeHead : BlockType.snake;
  }

  if (fieldsToClear) {
    filledBlocks[fieldsToClear[0]][fieldsToClear[1]] = BlockType.empty;
  }
};

/**
 * better name?
 */
const getAddition = (pos: 'x' | 'y', number: number, direction: typeof snakeStartPosition = snakeMovingDirection) => {
  if (pos === 'x' && direction === 'horizontalTop') {
    return number;
  }
  if (pos === 'x' && direction === 'horizontalBottom') {
    return -number;
  }
  if (pos === 'y' && direction === 'verticalLeft') {
    return number;
  }
  if (pos === 'y' && direction === 'verticalRight') {
    return -number;
  }

  return 0;
};

const generateSnake = () => {
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

const addBlockToSnake = () => {
  const currentTail = snake.at(-1);

  const newTail: [number, number] = [currentTail[0] + getAddition('x', 1), currentTail[1] + getAddition('y', 1)];

  snake.push(newTail);

  syncSnakeWithGameField();

  render();
};

const moveSnake = () => {
  const currentHead = snake[0];

  /** detect crossing the borderline */
  if (
    (snakeMovingDirection === 'horizontalTop' && currentHead[0] === 0) ||
    (snakeMovingDirection === 'horizontalBottom' && currentHead[0] === fieldSize - 1) ||
    (snakeMovingDirection === 'verticalRight' && currentHead[1] === fieldSize - 1) ||
    (snakeMovingDirection === 'verticalLeft' && currentHead[1] === 0)
  ) {
    endOfGame();

    return;
  }

  const newHead: [number, number] = [currentHead[0] - getAddition('x', 1), currentHead[1] - getAddition('y', 1)];

  /** check if snake's head doesn't replace its body */
  let goNext = true;

  for (let i = 0; i < snake.length; i += 1) {
    if (snake[i][0] === newHead[0] && snake[i][1] === newHead[1]) {
      goNext = false;
      break;
    }
  }

  if (goNext) {
    snake.unshift(newHead);

    syncSnakeWithGameField(snake.pop());

    render();
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
    endOfGame();
  } else {
    markBlock(freeBlocks[getRandomNumber(1, freeBlocks.length) - 1], BlockType.active);
  }
};

const subscribeOnArrows = () => {
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowUp':
        snakeMovingDirection = 'horizontalTop';
        moveSnake();
        break;
      case 'ArrowDown':
        snakeMovingDirection = 'horizontalBottom';
        moveSnake();
        break;
      case 'ArrowLeft':
        snakeMovingDirection = 'verticalLeft';
        moveSnake();
        break;
      case 'ArrowRight':
        snakeMovingDirection = 'verticalRight';
        moveSnake();
        break;
      default:
        break;
    }
  });
};

window.addEventListener('load', () => {
  generateGameField();

  generateSnake();

  subscribeOnArrows();

  // interval = window.setInterval(() => {
  createNewBlockInRandomPlace();
  // }, 1000);
});
