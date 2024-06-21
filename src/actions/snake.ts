import { endOfGame, winOfGame } from './game';
import { clearGameFieldBlock, markBlock, render, syncSnakeWithGameField } from './DOM';
import { getAddition, getRandomNumber } from '../utils';
import { getGameField, getSnakeMovingDirection, getSnake, setSnake } from '../utils/store';
import { fieldSize } from '../config';
import { BlockType, SnakeType } from '../utils/types';

const addBlockToSnake = () => {
  const snake = getSnake();

  const currentTail = snake.at(-1);

  const newTail: [number, number] = [currentTail[0] + getAddition('x', 1), currentTail[1] + getAddition('y', 1)];

  snake.push(newTail);

  setSnake(snake);
};

/** has to be called after generating a snake */
export const createNewBlockInRandomPlace = () => {
  // find free blocks
  const freeBlocks = [];

  for (let x = 0; x < fieldSize; x += 1) {
    for (let y = 0; y < fieldSize; y += 1) {
      if (getGameField()[x][y] === BlockType.empty) {
        freeBlocks.push([x, y]);
      }
    }
  }

  if (freeBlocks.length === 0) {
    endOfGame();
  } else {
    const randomIndex = getRandomNumber(1, freeBlocks.length) - 1;

    markBlock(freeBlocks[randomIndex], BlockType.food);

    render();
  }
};

/** snake can't move back */
export const isMovingBack = (newHead: SnakeType[0]): boolean =>
  !(getSnake()[1][0] === newHead[0] && getSnake()[1][1] === newHead[1]);

/** check if snake's head doesn't replace its body */
export const isMovingToItself = (newHead: SnakeType[0]): boolean => {
  for (let i = 0; i < getSnake().length; i += 1) {
    if (getSnake()[i][0] === newHead[0] && getSnake()[i][1] === newHead[1]) {
      return false;
    }
  }

  return true;
};

/** detect crossing the borderline */
export const isMovingToBorderLine = (head: SnakeType[0]): boolean => {
  const snakeMovingDirection = getSnakeMovingDirection();

  return !(
    (snakeMovingDirection === 'horizontalTop' && head[0] === 0) ||
    (snakeMovingDirection === 'horizontalBottom' && head[0] === fieldSize - 1) ||
    (snakeMovingDirection === 'verticalRight' && head[1] === fieldSize - 1) ||
    (snakeMovingDirection === 'verticalLeft' && head[1] === 0)
  );
};

export const ifAteFood = (newHead: SnakeType[0]) => {
  if (getGameField()[newHead[0]][newHead[1]] === BlockType.food) {
    console.log('ate food');
    addBlockToSnake();

    markBlock(newHead, BlockType.empty);

    createNewBlockInRandomPlace();
  }
};

export const isEmptyBlock = () => {
  const gameField = getGameField();

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
  const currentHead = getSnake()[0];

  const newHead: [number, number] = [currentHead[0] - getAddition('x', 1), currentHead[1] - getAddition('y', 1)];

  if (!isMovingBack(newHead)) {
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

  ifAteFood(newHead);

  getSnake().unshift(newHead);

  clearGameFieldBlock(getSnake().pop());

  syncSnakeWithGameField();

  render();
};
