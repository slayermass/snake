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

const snake: number[][] = [];

const snakeMovingDirection: typeof snakeStartPosition = snakeStartPosition;

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

const syncSnakeWithGameField = () => {
  console.log('syncSnakeWithGameField', filledBlocks, snake);

  for (let i = 0; i < snake.length; i += 1) {
    filledBlocks[snake[i][0]][snake[i][1]] = i === 0 ? BlockType.snakeHead : BlockType.snake;
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

const moveSnake = (position: 'left' | 'right' | 'top' | 'bottom') => {
  console.log('moveSnake', position, JSON.parse(JSON.stringify(filledBlocks)), snake);

  // const temp = [];
  //
  // for (let x = 0; x < fieldSize; x += 1) {
  //   for (let y = 0; y < fieldSize; y += 1) {
  //     if (filledBlocks[x][y] === BlockType.snakeHead) {
  //       temp.unshift([x, y]);
  //     } else if (filledBlocks[x][y] === BlockType.snake) {
  //       // temp.push([x, y]);
  //     }
  //   }
  // }

  // TODO check if head can move

  // move head (top)
  // if (filledBlocks[tempHead[0] - 1] !== undefined && filledBlocks[tempHead[0] - 1][tempHead[1]] !== undefined) {
  //   filledBlocks[tempHead[0] - 1][tempHead[1]] = BlockType.snakeHead;
  //   filledBlocks[tempHead[0]][tempHead[1]] = BlockType.snake;
  // } else {
  //   console.error('moved out of the game field');
  //   return;
  // }

  // const tail = tempBody.pop();
  // filledBlocks[tail[0]][tail[1]] = BlockType.empty;

  // render();
};

const addBlockToSnake = () => {
  const currentTail = snake.at(-1);

  const newTail = [currentTail[0] + getAddition('x', 1), currentTail[1] + getAddition('y', 1)];

  snake.push(newTail);

  syncSnakeWithGameField();

  render();
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
    console.error('end of the game');
  } else {
    markBlock(freeBlocks[getRandomNumber(1, freeBlocks.length) - 1], BlockType.active);
  }
};

window.addEventListener('load', () => {
  generateGameField();

  generateSnake();

  // @ts-ignore
  window.addBlockToSnake = () => addBlockToSnake();

  // @ts-ignore
  window.moveTop = () => moveSnake('top');

  // @ts-ignore
  window.moveTop = () => moveSnake('right');

  // interval = window.setInterval(() => {
  //   createNewBlockInRandomPlace();
  // }, 1000);
});
