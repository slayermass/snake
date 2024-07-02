import { endOfGame, winOfGame } from './game';
import { clearGameFieldBlock, markBlock, render, syncSnakeWithGameField } from './DOM';
import { getAddition, getRandomNumber } from '../utils';
import store from '../utils/store';
import { fieldSize, snakeMovingSpeedIncreaseByEatenFood } from '../config';
import { BlockType, SnakeMovingDirection, SnakeType } from '../utils/types';

const getSnakeTailDirection = (): SnakeMovingDirection => {
  const [prevX, prevY] = store.snake.at(-2);

  const [currentX, currentY] = store.snake.at(-1);

  const [resX, resY] = [prevX - currentX, prevY - currentY];

  if (resX === 1 && resY === 0) {
    return 'horizontalBottom';
  }
  if (resX === -1 && resY === 0) {
    return 'horizontalTop';
  }

  if (resX === 0 && resY === 1) {
    return 'verticalRight';
  }
  if (resX === 0 && resY === -1) {
    return 'verticalLeft';
  }

  return 'unknown' as SnakeMovingDirection;
};

const addBlockToSnake = () => {
  const { snake } = store;

  const currentTail = snake.at(-1);

  const tailDirection = getSnakeTailDirection();

  const newTail: [number, number] = [
    currentTail[0] + getAddition('x', 1, tailDirection),
    currentTail[1] + getAddition('y', 1, tailDirection),
  ];

  snake.push(newTail);
};

/** has to be called after generating a snake */
export const createNewBlockInRandomPlace = () => {
  // find free blocks
  const freeBlocks = [];

  for (let x = 0; x < fieldSize; x += 1) {
    for (let y = 0; y < fieldSize; y += 1) {
      if (store.gameField[x][y] === BlockType.empty) {
        freeBlocks.push([x, y]);
      }
    }
  }

  if (freeBlocks.length === 0) {
    winOfGame();
  } else {
    const randomIndex = getRandomNumber(1, freeBlocks.length) - 1;

    markBlock(freeBlocks[randomIndex], BlockType.food);

    render();
  }
};

/** snake can't move back */
export const isMovingBack = (newHead: SnakeType[0]): boolean =>
  store.snake[1][0] === newHead[0] && store.snake[1][1] === newHead[1];

/** check if snake's head doesn't replace its body */
export const isMovingToItself = (newHead: SnakeType[0]): boolean => {
  for (let i = 0; i < store.snake.length; i += 1) {
    if (store.snake[i][0] === newHead[0] && store.snake[i][1] === newHead[1]) {
      return false;
    }
  }

  return true;
};

/** detect crossing the borderline */
export const isMovingToBorderLine = (head: SnakeType[0]): boolean => {
  const { snakeMovingDirection } = store;

  return !(
    (snakeMovingDirection === 'horizontalTop' && head[0] === 0) ||
    (snakeMovingDirection === 'horizontalBottom' && head[0] === fieldSize - 1) ||
    (snakeMovingDirection === 'verticalRight' && head[1] === fieldSize - 1) ||
    (snakeMovingDirection === 'verticalLeft' && head[1] === 0)
  );
};

export const ifAteFood = (newHead: SnakeType[0]): boolean => {
  if (store.gameField[newHead[0]][newHead[1]] === BlockType.food) {
    addBlockToSnake();

    markBlock(newHead, BlockType.empty);

    store.snakeInitialMovingSpeed += snakeMovingSpeedIncreaseByEatenFood;

    return true;
  }

  return false;
};

export const isEmptyBlock = () => {
  const { gameField } = store;

  for (let x = 0; x < gameField.length; x += 1) {
    for (let y = 0; y < fieldSize; y += 1) {
      if (gameField[x][y] === BlockType.empty) {
        return true;
      }
    }
  }

  return false;
};

export const moveSnake = () => {
  const currentHead = store.snake[0];

  const newHead: [number, number] = [currentHead[0] - getAddition('x', 1), currentHead[1] - getAddition('y', 1)];

  if (isMovingBack(newHead)) {
    endOfGame();

    return;
  }

  if (!isMovingToItself(newHead) || !isMovingToBorderLine(currentHead)) {
    endOfGame();

    return;
  }

  if (!isEmptyBlock()) {
    winOfGame();

    return;
  }

  const isAte = ifAteFood(newHead);

  store.snake.unshift(newHead);

  clearGameFieldBlock(store.snake.pop());

  if (isAte) {
    createNewBlockInRandomPlace();
  }

  syncSnakeWithGameField();

  render();
};
