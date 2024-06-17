import { endOfGame, render, syncSnakeWithGameField } from './DOM';
import { getAddition, getRandomNumber } from '../utils';
import { gameField, getSnakeMovingDirection, snake } from '../utils/store';
import { fieldSize } from '../config';
import { BlockType, SnakeType } from '../utils/types';

const addBlockToSnake = () => {
  const currentTail = snake.at(-1);

  const newTail: [number, number] = [currentTail[0] + getAddition('x', 1), currentTail[1] + getAddition('y', 1)];

  snake.push(newTail);
};

// mark a block and rerender
const markBlock = (position: [number, number], type: BlockType) => {
  gameField[position[0]][position[1]] = type;

  render();
};

//

export const createNewBlockInRandomPlace = () => {
  // find free blocks
  const freeBlocks = [];

  for (let x = 0; x < fieldSize; x += 1) {
    for (let y = 0; y < fieldSize; y += 1) {
      if (gameField[x][y] === BlockType.empty) {
        freeBlocks.push([x, y]);
      }
    }
  }

  if (freeBlocks.length === 0) {
    endOfGame();
  } else {
    markBlock(freeBlocks[getRandomNumber(1, freeBlocks.length) - 1], BlockType.food);
  }
};

/** snake can't move back */
export const isMovingBack = (newHead: SnakeType[0]): boolean =>
  !(snake[1][0] === newHead[0] && snake[1][1] === newHead[1]);

/** check if snake's head doesn't replace its body */
export const isMovingToItself = (newHead: SnakeType[0]): boolean => {
  for (let i = 0; i < snake.length; i += 1) {
    if (snake[i][0] === newHead[0] && snake[i][1] === newHead[1]) {
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
  if (gameField[newHead[0]][newHead[1]] === BlockType.food) {
    addBlockToSnake();

    gameField[newHead[0]][newHead[1]] = BlockType.empty;

    createNewBlockInRandomPlace();
  }
};

export const moveSnake = () => {
  const currentHead = snake[0];

  const newHead: [number, number] = [currentHead[0] - getAddition('x', 1), currentHead[1] - getAddition('y', 1)];

  if (!isMovingBack(newHead)) {
    return;
  }

  if (!isMovingToItself(newHead) || !isMovingToBorderLine(currentHead)) {
    endOfGame();

    return;
  }

  ifAteFood(newHead);

  snake.unshift(newHead);

  syncSnakeWithGameField(snake.pop());

  render();
};
